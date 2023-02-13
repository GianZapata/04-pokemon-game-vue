<template>
  <div class="flex flex-col items-center justify-center">
    <button
      class="font-bold py-2 px-4 rounded w-96 my-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-blue-700 text-white capitalize"
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="checkAnswer(pokemon.id)"
    >
      {{ capitalize(pokemon.name) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from "@/composables/usePokemons"
import capitalize from "@/helpers/capitalize"

const { pokemons, checkAnswer } = usePokemons()
</script>
