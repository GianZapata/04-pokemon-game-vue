<template>
  <div class="flex flex-col items-center justify-center" v-if="!pokemon">
    <h1 class="text-3xl text-center mt-20 font-black text-slate-900">
      Cargando ...
    </h1>
  </div>

  <div class="flex flex-col items-center justify-center" v-else>
    <h1 class="text-3xl text-center mt-20 font-black text-slate-900">
      ¿Quién este este pokemon?
    </h1>
    <PokemonImage :pokemonId="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemons" @select-pokemon="checkAnswer" />

    <template v-if="showPokemon">
      <h2
        class="text-2xl text-center mt-20 font-black text-slate-900"
        v-if="message"
      >
        {{ message }}
      </h2>

      <button
        class="font-bold py-2 px-4 rounded w-96 my-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white"
        @click="newGame"
      >
        Nuevo juego
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import PokemonImage from "@/components/PokemonImage.vue"
import PokemonOptions from "@/components/PokemonOptions.vue"
import getPokemonOptions from "@/helpers/get-pokemon-options"

export default {
  components: {
    PokemonImage,
    PokemonOptions,
  },
  data() {
    return {
      pokemons: [] as { id: number; name: string }[],
      pokemon: null as { id: number; name: string } | null,
      showPokemon: false,
      message: "",
    }
  },
  methods: {
    async mixPokemons() {
      const pokemons = await getPokemonOptions()
      this.pokemons = pokemons
      const randomIndex = Math.floor(Math.random() * pokemons.length)
      this.pokemon = pokemons[randomIndex]
    },
    checkAnswer(pokemonId: number) {
      this.showPokemon = true
      if (pokemonId === this.pokemon?.id) {
        this.message = `¡Correcto! El pokemon es ${this.pokemon?.name}`
      } else {
        this.message = `Oops! El pokemon era ${this.pokemon?.name}`
      }

      setTimeout(() => {
        this.newGame()
      }, 2000)
    },
    newGame() {
      this.showPokemon = false
      this.message = ""
      this.pokemons = []
      this.pokemon = null
      this.mixPokemons()
    },
  },
  mounted() {
    this.mixPokemons()
  },
}
</script>
