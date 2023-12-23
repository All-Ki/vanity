const { fonts, renderPixels } = require("js-pixel-fonts");
const { DateTime } = require("luxon");

const rowCount = 7;
const columnCount = 52;

module.exports = (label) => {
  const letters = label.split("").map((letter) => {
    return renderPixels(letter, fonts["sevenPlus"]);
  });

  console.log(letters);
  let dates = [];
  for (const x of Array.from({ length: columnCount }).map((_, i) => i)) {
    for (const y of Array.from({ length: rowCount }).map((_, i) => i)) {
      const date = DateTime.utc()
        .startOf("year")
        .plus({ days: y + x * 7 })
        .toISO();

      const letterIndex = Math.floor(x / 6);
      const letter = letters[letterIndex];
      if (!letter) continue;

      const letterColumn = x % 6;
      const letterRow = y;
      const value = letter[letterRow][letterColumn];
      if (value === 1) {
        dates.push(date);
      }
    }
  }

  return dates;
};
