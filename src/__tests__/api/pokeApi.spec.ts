import { describe, expect, test } from "vitest"
import pokeApi from "@/api/pokeApi"

describe("PokeApi", () => {
  test("Axios debe estar configurado con la url de pokemon API", () => {
    expect(pokeApi.defaults.baseURL).toBe("https://pokeapi.co/api/v2")
  })
})
