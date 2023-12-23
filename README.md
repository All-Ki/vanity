# github-commit-labeller

A tool to let you label your github commit contribution grid.

## pre-requisites

- nodejs 16+ recommended

## Usage

- npm i
- node github-commit-labeller.js <yourmessage>

...
A branch named `disposable` will be created with the commits.
If you make the `disposable` branch the default branch, your message will appear in your github commit contribution grid.

PS: If you would like to overwrite the message to a different message, I highly recommend you switch the default branch back to `main`. The script deletes the `disposable` branch to renew the commits, and github does not cope well with deleting or force-pushing the default branch.
...

## Example

- node github-commit-labeller.js HACKERN
