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
    <PokemonImage />
    <PokemonOptions />

    <template v-if="showAnswer">
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

<script setup lang="ts">
import PokemonOptions from "@/components/PokemonOptions.vue"
import PokemonImage from "@/components/PokemonImage.vue"

import { usePokemons } from "@/composables/usePokemons"

const {
  /** Properties */
  message,
  pokemon,
  showAnswer,

  /** Methods */
  mixPokemons,
  newGame,
} = usePokemons()
mixPokemons()
</script>
