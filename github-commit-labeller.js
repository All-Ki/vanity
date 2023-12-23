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
  try {
    await execPromise("git branch disposable -D");
  } catch (e) {
    // no-op
    // This can happen on first run
  }
  await execPromise("git checkout -b disposable");

  const commitCount = 30;
  for (const date of dates) {
    console.log("Committing for date: ", date);
    for (const _ of Array.from({ length: commitCount })) {
      await execPromise(
        `git commit --date "${date}" -m "labelling" --allow-empty`
      );
    }
  }
  await execPromise("git push origin disposable --force");
  await execPromise("git checkout main");
})();
