<template>
  <div class="my-20">
    <img
      class="w-64 h-64 fade-in"
      :src="pokemonImage"
      alt="Pokemon"
      :class="
        showPokemon ? 'show-pokemon' : 'hide-pokemon brightness-0 disable-drag'
      "
    />
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from "@/composables/usePokemons"

const { showPokemon, pokemonImage } = usePokemons()
</script>

<style lang="css">
.disable-drag {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
