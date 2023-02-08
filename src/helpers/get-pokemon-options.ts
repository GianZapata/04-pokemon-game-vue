import pokeApi from "../api/pokeApi"
import type { IPokemon } from "@/interfaces/pokemon.interface"
import type { AxiosResponse } from "axios"

const getPokemons = () => {
  return Array.from(Array(650)).map((_, index) => {
    return index + 1
  })
}

const getPokemonOptions = () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  return getPokemonNames(mixedPokemons.slice(0, 4))
}

const getPokemonNames = async (
  listOfPokemons: number[] = []
): Promise<{ id: number; name: string }[]> => {
  const pokemonPromises: Promise<AxiosResponse<IPokemon>>[] = []

  for (const pokemon of listOfPokemons) {
    pokemonPromises.push(pokeApi.get(`/pokemon/${pokemon}`))
  }

  const pokemonResponses = await Promise.all(pokemonPromises)

  const pokemons = pokemonResponses.map((pokemon) => ({
    id: pokemon.data.id,
    name: pokemon.data.name,
  }))

  return pokemons
}

export default getPokemonOptions
