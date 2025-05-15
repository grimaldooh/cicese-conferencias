import { Pokemon } from "@/types/pokemon";

// Mapa de colores por tipo de Pokémon
const typeColors: Record<string, string> = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-blue-200",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-300",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-700",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-600",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  // Capitalizar el nombre del Pokémon
  const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Imagen y nombre */}
      <div className="relative p-4 flex flex-col items-center">
        <div className="absolute top-2 right-2 text-xs font-medium text-gray-500">
          #{pokemon.id.toString().padStart(3, '0')}
        </div>
        <img 
          src={pokemon.image} 
          alt={pokemon.name} 
          className="w-32 h-32 object-contain"
        />
        <h2 className="text-lg font-bold mt-2">{capitalizedName}</h2>
        
        {/* Tipos */}
        <div className="flex gap-2 mt-1">
          {pokemon.types.map(type => (
            <span 
              key={type} 
              className={`${typeColors[type] || 'bg-gray-400'} text-white text-xs px-2 py-1 rounded-full`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
      
      {/* Estadísticas */}
      <div className="p-4 bg-gray-50 dark:bg-gray-700">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <span className="w-16 text-gray-500 dark:text-gray-400">Altura:</span>
            <span>{pokemon.height} m</span>
          </div>
          <div className="flex items-center">
            <span className="w-16 text-gray-500 dark:text-gray-400">Peso:</span>
            <span>{pokemon.weight} kg</span>
          </div>
        </div>
        
        {/* Barras de estadísticas */}
        <div className="mt-3 space-y-2">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>HP</span>
              <span>{pokemon.stats.hp}/255</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500" 
                style={{ width: `${(pokemon.stats.hp / 255) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Ataque</span>
              <span>{pokemon.stats.attack}/255</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-500" 
                style={{ width: `${(pokemon.stats.attack / 255) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Defensa</span>
              <span>{pokemon.stats.defense}/255</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500" 
                style={{ width: `${(pokemon.stats.defense / 255) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Velocidad</span>
              <span>{pokemon.stats.speed}/255</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-500" 
                style={{ width: `${(pokemon.stats.speed / 255) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}