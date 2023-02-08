import { defineStore } from "pinia"
import type { IPokemon } from "@/interfaces/pokemon.interface"

interface PokemonState {
  pokemons: IPokemon[]
  pokemon: IPokemon | null
  showPokemon: boolean
  showAnswer: boolean
  message: string
}

export const usePokemonStore = defineStore("pokemon", {
  state: (): PokemonState => ({
    pokemons: [],
    pokemon: null,
    showAnswer: false,
    showPokemon: false,
    message: "",
  }),
  actions: {
    loadPokemons(pokemons: IPokemon[]) {
      this.pokemons = pokemons
    },
    setHiddenPokemon(pokemon: IPokemon) {
      this.pokemon = pokemon
    },
    showPokemonAndAnswer(message: string) {
      this.message = message
      this.showAnswer = true
      this.showPokemon = true
    },
    clearState() {
      this.message = ""
      this.pokemon = null
      this.pokemons = []
      this.showAnswer = false
      this.showPokemon = false
    },
  },
})
