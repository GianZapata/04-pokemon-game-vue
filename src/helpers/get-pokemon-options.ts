import type { AxiosResponse } from "axios"

import pokeApi from "@/api/pokeApi"
import type { IPokemon } from "@/interfaces/pokemon.interface"

const getPokemons = (): number[] => {
  return Array.from(Array(650)).map((_, index) => {
    return index + 1
  })
}

const getPokemonOptions = (): Promise<IPokemon[]> => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  return getFourPokemonNames(mixedPokemons.slice(0, 4))
}

const getFourPokemonNames = async (
  listOfPokemons: number[] = []
): Promise<IPokemon[]> => {
  if (listOfPokemons.length !== 4) throw new Error("You must pass 4 pokemons")

  const pokemonPromises: Promise<AxiosResponse<IPokemon>>[] = []
  for (const pokemon of listOfPokemons) {
    pokemonPromises.push(pokeApi.get(`/pokemon/${pokemon}`))
  }

  const pokemonResponses = await Promise.all(pokemonPromises)

  return pokemonResponses.map((pokemon) => ({
    id: pokemon.data.id,
    name: pokemon.data.name,
  }))
}

export default getPokemonOptions
