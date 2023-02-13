import { computed } from "vue"
import { storeToRefs } from "pinia"
import { usePokemonStore } from "@/store/pokemon.store"
import getPokemonOptions from "@/helpers/get-pokemon-options"

export const usePokemons = () => {
  const pokemonStore = usePokemonStore()

  const { message, pokemon, pokemons, showAnswer, showPokemon } =
    storeToRefs(pokemonStore)

  const mixPokemons = async () => {
    const mixedPokemons = await getPokemonOptions()
    pokemonStore.loadPokemons(mixedPokemons)

    const randomInt = Math.floor(Math.random() * 4)

    const mixedPokemon = pokemons.value[randomInt]
    pokemonStore.setHiddenPokemon(mixedPokemon)
  }

  const checkAnswer = (selectedId: number) => {
    if (!pokemon.value) return

    if (selectedId === pokemon.value.id) {
      pokemonStore.showPokemonAndAnswer(`Correcto, ${pokemon.value.name}`)
    } else {
      pokemonStore.showPokemonAndAnswer(`Oops, era ${pokemon.value.name}`)
    }
  }

  const newGame = () => {
    pokemonStore.clearState()
    mixPokemons()
  }

  return {
    /** Properties */
    message,
    pokemon,
    pokemons,
    showAnswer,
    showPokemon,

    /** Computed */
    pokemonImage: computed(
      () =>
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.value?.id}.svg`
    ),

    /** Methods */
    checkAnswer,
    mixPokemons,
    newGame,
  }
}
