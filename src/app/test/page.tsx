"use client";

import { useState, useEffect } from "react";
import { Pokemon, PokemonApiResponse } from "@/types/pokemon";
import PokemonCard from "@/components/PokemonCard";
import Carrusel from "@/components/Carrusel";

export default function TestPage() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setLoading(true);
        const response = await fetch("/api/pokemon");
        
        if (!response.ok) {
          throw new Error(`Error fetching Pokemon: ${response.status}`);
        }
        
        const data: PokemonApiResponse = await response.json();
        setPokemon(data.pokemon);
      } catch (err) {
        console.error("Failed to fetch Pokemon:", err);
        setError("Error al cargar los Pokémon. Por favor, intenta nuevamente más tarde.");
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Pokémon API Test</h1>

      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemon.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
          ))}
        </div>
      )}

      <div className="mt-28 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">Carrusel de Numeros de ejemplo de shadcn</h2>
        <Carrusel />
      </div>
    </div>
  );
}