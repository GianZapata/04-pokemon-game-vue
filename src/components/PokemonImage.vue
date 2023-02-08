<template>
  <div class="my-20">
    <img
      class="w-64 h-64 fade-in"
      :src="pokemonImage"
      alt="Pokemon"
      :class="showPokemon ? 'show' : 'brightness-0 disable-drag'"
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

<!-- <script lang="ts">
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    },
  },
}
</script> -->
