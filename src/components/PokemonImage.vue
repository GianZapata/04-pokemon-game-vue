<template>
  <div class="my-20">
    <img
      class="w-64 h-64"
      :src="imgSrc"
      alt="Pokemon"
      :class="showPokemon ? 'show' : 'brightness-0 disable-drag'"
    />
  </div>
</template>
<script lang="ts">
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
