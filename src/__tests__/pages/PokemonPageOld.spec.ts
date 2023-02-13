import type { ComponentPublicInstance } from "vue"
import { shallowMount, VueWrapper } from "@vue/test-utils"
import { beforeEach, describe, test, expect, vi } from "vitest"
import PokemonPage from "@/pages/PokemonPageOld.vue"
import { mockedPokemons } from "../mocks/pokemons.mock"

describe("PokemonPage Component", () => {
  let wrapper: VueWrapper<ComponentPublicInstance>

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })

  test("Debe de hacer el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test("Debe de llamar mixPokemons al montar", () => {
    const mixPokemonsSpy = vi.spyOn<any, any>(
      PokemonPage.methods,
      PokemonPage.methods?.mixPokemons.name
    )
    shallowMount(PokemonPage)
    expect(mixPokemonsSpy).toHaveBeenCalled()
  })

  test("Debe de hacer match con el snapshot cuando cargan los pokemons", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemons: mockedPokemons,
          pokemon: mockedPokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        }
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test("Debe de mostrar los componentes de PokemonPicture y PokemonOptions", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemons: mockedPokemons,
          pokemon: mockedPokemons[0],
          showPokemon: true,
          showAnswer: true,
          message: "",
        }
      },
    })

    const image = wrapper.find("pokemon-image-stub")
    const options = wrapper.find("pokemon-options-stub")

    expect(image.exists()).toBeTruthy()
    expect(options.exists()).toBeTruthy()
    expect(image.attributes("pokemonid")).toBe("1")
    expect(options.attributes("pokemons")).toBeTruthy()
  })

  test("Pruebas con checkAnswer", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemons: mockedPokemons,
          pokemon: mockedPokemons[0],
          showPokemon: true,
          showAnswer: true,
          message: "",
        }
      },
    })

    await wrapper.vm.checkAnswer(1)

    expect(wrapper.find("h2").exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBeTruthy()
    expect(wrapper.find("h2").text()).toBe(
      `¡Correcto! El pokemon es ${mockedPokemons[0].name}`
    )

    await wrapper.vm.checkAnswer(2)

    expect(wrapper.vm.message).toBe(
      `Oops! El pokemon era ${mockedPokemons[0].name}`
    )
  })
})
