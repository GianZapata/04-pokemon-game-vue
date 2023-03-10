import { test, describe, expect } from "vitest"
import { mockedPokemons } from "../mocks/pokemons.mock"
import getPokemonOptions, {
  getPokemons,
  getFourPokemonNames,
} from "@/helpers/get-pokemon-options"

describe("getPokemonOptions", () => {
  test("Debe retornar un arreglo de números", () => {
    const pokemons = getPokemons()

    expect(pokemons.length).toBe(650)
    expect(pokemons[0]).toBe(1)
    expect(pokemons[500]).toBe(501)
    expect(pokemons[649]).toBe(650)
  })

  test("Debe retornar un arreglo de 4 elementos con nombres de pokemons", async () => {
    const pokemons = await getFourPokemonNames([1, 2, 3, 4])

    expect(pokemons).toStrictEqual(mockedPokemons)
  })

  test("getPokemonOptions debe de retornar un arreglo mezclado", async () => {
    const pokemons = await getPokemonOptions()

    expect(pokemons.length).toBe(4)
    expect(pokemons).toEqual([
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
    ])
  })
})
