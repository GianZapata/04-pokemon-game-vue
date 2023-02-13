import { defineComponent } from "vue"

import PokemonImage from "@/components/PokemonImage.vue"
import PokemonOptions from "@/components/PokemonOptions.vue"
import { usePokemons } from "@/composables/usePokemons"

export default defineComponent({
  name: "PokemonPage",
  components: {
    PokemonImage,
    PokemonOptions,
  },
  setup() {
    const {
      /** Properties */
      message,
      pokemon,
      pokemons,
      showAnswer,
      showPokemon,

      /** Methods */
      checkAnswer,
      mixPokemons,
      newGame,
    } = usePokemons()

    mixPokemons()

    return {
      message,
      pokemon,
      pokemons,
      showAnswer,
      showPokemon,

      /** Methods */
      checkAnswer,
      mixPokemons,
      newGame,
    }
  },
})
