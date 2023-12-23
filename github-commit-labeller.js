const generateCommitDates = require("./generate-commit-dates");
const execPromise = require("./exec-promise");

const label = process.argv[2];
if (!label) {
  console.log("Please include a label. Here is an example: ");
  console.log("node github-commit-labeller.js HACKER");
  return;
}

const isAlphaNumeric = (char) => {
  const charCode = char.charCodeAt(0);
  return (
    (charCode >= 48 && charCode <= 57) ||
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122)
  );
};
if (label.split("").some((char) => !isAlphaNumeric(char))) {
  console.log(
    "Please use only capital letters for your label. Here is an example: "
  );
  console.log("node github-commit-labeller.js HACKER");
  return;
}

const capitalizedLabel = label.toUpperCase();

const dates = generateCommitDates(capitalizedLabel);

(async () => {
  const commitCount = 50;
  for (const date of dates) {
    for (const _ of Array.from({ length: commitCount })) {
      await execPromise(
        `git commit --date "${date}" -m "labelling" --allow-empty`
      );
    }
  }
})();
