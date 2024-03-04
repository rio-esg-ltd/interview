import { rockPaperScissorsLizardSpock } from "./rock-paper-scissors-lizard-spock";

describe("rockPaperScissorsLizardSpock", () => {
  test.each`
    player1       | player2       | winner
    ${"scissors"} | ${"paper"}    | ${1}
    ${"paper"}    | ${"rock"}     | ${1}
    ${"rock"}     | ${"lizard"}   | ${1}
    ${"lizard"}   | ${"spock"}    | ${1}
    ${"spock"}    | ${"scissors"} | ${1}
    ${"scissors"} | ${"lizard"}   | ${1}
    ${"lizard"}   | ${"paper"}    | ${1}
    ${"paper"}    | ${"spock"}    | ${1}
    ${"spock"}    | ${"rock"}     | ${1}
    ${"rock"}     | ${"scissors"} | ${1}
    ${"paper"}    | ${"scissors"} | ${2}
    ${"rock"}     | ${"paper"}    | ${2}
    ${"lizard"}   | ${"rock"}     | ${2}
    ${"spock"}    | ${"lizard"}   | ${2}
    ${"scissors"} | ${"spock"}    | ${2}
    ${"lizard"}   | ${"scissors"} | ${2}
    ${"paper"}    | ${"lizard"}   | ${2}
    ${"spock"}    | ${"paper"}    | ${2}
    ${"rock"}     | ${"spock"}    | ${2}
    ${"scissors"} | ${"rock"}     | ${2}
    ${"paper"}    | ${"paper"}    | ${0}
    ${"rock"}     | ${"rock"}     | ${0}
    ${"lizard"}   | ${"lizard"}   | ${0}
    ${"spock"}    | ${"spock"}    | ${0}
    ${"scissors"} | ${"scissors"} | ${0}
  `(
    "rockPaperScissorsLizardSpock($player1, $player2)",
    ({ player1, player2, winner }) => {
      const result = winner ? `Player ${winner} won!` : "Draw!";
      expect(rockPaperScissorsLizardSpock(player1, player2)).toBe(result);
    }
  );
});
