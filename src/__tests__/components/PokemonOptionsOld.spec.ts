import { describe, test, expect, beforeEach } from "vitest"
import { shallowMount, VueWrapper } from "@vue/test-utils"
import PokemonOptions from "@/components/PokemonOptionsOld.vue"
import { mockedPokemons } from "../mocks/pokemons.mock"
import type { ComponentPublicInstance } from "vue"

describe("PokemonOptions Component", () => {
  let wrapper: VueWrapper<ComponentPublicInstance>

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: mockedPokemons,
      },
    })
  })

  test("Debe de hacer el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test("Debe de mostrar las 4 opciones correctamente", () => {
    const buttonTags = wrapper.findAll("button")

    expect(buttonTags.length).toBe(4)

    expect(buttonTags[0].text().toLowerCase()).toBe("bulbasaur")
    expect(buttonTags[1].text().toLowerCase()).toBe("ivysaur")
    expect(buttonTags[2].text().toLowerCase()).toBe("venusaur")
    expect(buttonTags[3].text().toLowerCase()).toBe("charmander")
  })

  test("Debe de emitir el evento 'onSelectPokemon' con sus respectivos argumentos al hacer click", () => {
    const [buttonBulbasaur, buttonIvysaur, buttonVenusaur, buttonCharmander] =
      wrapper.findAll("button")

    buttonBulbasaur.trigger("click")
    buttonIvysaur.trigger("click")
    buttonVenusaur.trigger("click")
    buttonCharmander.trigger("click")

    expect(wrapper.emitted("selectPokemon")?.length).toBe(4)
    expect(wrapper.emitted("selectPokemon")?.[0]).toEqual([1])
    expect(wrapper.emitted("selectPokemon")?.[1]).toEqual([2])
    expect(wrapper.emitted("selectPokemon")?.[2]).toEqual([3])
    expect(wrapper.emitted("selectPokemon")?.[3]).toEqual([4])
  })
})
