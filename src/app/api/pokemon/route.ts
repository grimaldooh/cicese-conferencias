import { NextResponse } from 'next/server';

// Tipo para la respuesta de la API
interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

// Función para obtener detalles de un Pokémon
async function getPokemonDetails(url: string): Promise<PokemonDetail> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching pokemon details: ${response.status}`);
  }
  return await response.json();
}

// Handler para GET
export async function GET() {
  try {
    // Obtener la lista de Pokémon
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    
    if (!response.ok) {
      throw new Error(`Error fetching pokemon: ${response.status}`);
    }
    
    const data: PokemonListResponse = await response.json();
    
    // Obtener detalles para cada Pokémon
    const pokemonDetailsPromises = data.results.map(pokemon => 
      getPokemonDetails(pokemon.url)
    );
    
    const pokemonDetails = await Promise.all(pokemonDetailsPromises);
    
    // Formatear los datos para nuestra respuesta
    const formattedPokemon = pokemonDetails.map(pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other['official-artwork'].front_default,
      types: pokemon.types.map(t => t.type.name),
      height: pokemon.height / 10, // Convertir a metros
      weight: pokemon.weight / 10, // Convertir a kg
      stats: {
        hp: pokemon.stats.find(s => s.stat.name === 'hp')?.base_stat || 0,
        attack: pokemon.stats.find(s => s.stat.name === 'attack')?.base_stat || 0,
        defense: pokemon.stats.find(s => s.stat.name === 'defense')?.base_stat || 0,
        speed: pokemon.stats.find(s => s.stat.name === 'speed')?.base_stat || 0,
      }
    }));
    
    return NextResponse.json({ pokemon: formattedPokemon });
  } catch (error) {
    console.error('Error in Pokemon API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Pokemon data' },
      { status: 500 }
    );
  }
}