# github-contribution-billboard

A tool to let you label your github commit contribution grid.

## pre-requisites

- nodejs 16+ recommended

## Usage

Start by forking this repo. The vanity commits will be on this repo, so that you can delete it if you'd like to remove the message.

Once you have forked the repo, clone it to your local machine. Then...

- npm i
- node github-contribution-billboard.js _yourmessage_

...
A branch named `disposable` will be created with the commits.
If you make the `disposable` branch the default branch of the repository, your message will appear in your github commit contribution grid.

PS: If you would like to overwrite the message to a different message, I highly recommend you switch the default branch back to `main` before running the script to update the label. The script deletes the `disposable` branch to wipe the vanity the commits, and github does not cope well with deleting or force-pushing the default branch.
...

## Example

- node github-contribution-billboard.js HACKERN
