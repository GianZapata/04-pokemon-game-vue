import { describe, test, expect } from "vitest"
import { shallowMount } from "@vue/test-utils"
import PokemonImage from "@/components/PokemonImageOld.vue"

describe("PokemonImage Component", () => {
  test("Debe de hacer el snapshot", () => {
    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test("Debe de mostrar la imagen oculta y el pokemon 100", () => {
    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    })

    const img = wrapper.find("img")

    expect(img.exists()).toBe(true)
    expect(img.classes("hide-pokemon")).toBe(true)
  })

  test("Debe de mostrar la imagen del showPokemon:true", () => {
    const pokemonURL =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"

    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    })

    const img = wrapper.find("img")
    const src = img.attributes("src")

    expect(img.exists()).toBe(true)
    expect(img.classes("hide-pokemon")).toBe(false)
    expect(img.classes("show-pokemon")).toBe(true)
    expect(src).toBe(pokemonURL)
  })
})
