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

<style lang="css">
.disable-drag {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>

<script lang="ts">
export default {
  name: "PokemonImage",
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
    pokemonImage() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    },
  },
}
</script>
