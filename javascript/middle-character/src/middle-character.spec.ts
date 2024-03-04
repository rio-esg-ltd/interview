import { middleCharacter } from "./middle-character";

describe("middleCharacter", () => {
  test.each`
    input        | result
    ${"test"}    | ${"es"}
    ${"testing"} | ${"t"}
    ${"middle"}  | ${"dd"}
    ${"A"}       | ${"A"}
  `("middleCharacter($input)", ({ input, result }) => {
    expect(middleCharacter(input)).toBe(result);
  });
});
