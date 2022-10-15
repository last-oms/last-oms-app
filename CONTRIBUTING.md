# How to contribute

We love pull requests. And following this guidelines will make your pull request easier to merge.

If you want to contribute but don’t know what to do, take a look at these two labels: [help wanted](/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) and [good first issue](https://github.com/narcisse-app/narcisse-app/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

_[Use GitHub interface](https://blog.sapegin.me/all/open-source-for-everyone/) for simple documentation changes, otherwise follow the steps below._

## Prerequisites

We follow this convention: ([github/scripts-to-rule-them-all](https://github.com/github/scripts-to-rule-them-all))

- If it’s your first pull request, watch [this amazing course](http://makeapullrequest.com/) by [Kent C. Dodds](https://twitter.com/kentcdodds).
- Install [EditorConfig](https://editorconfig.org/) plugin for your code editor to make sure it uses correct settings.
- Fork the repository and clone your fork.
- Bootstrap your installation `./scripts/bootstrap.sh`
- Install dependencies: `yarn`.

## Development workflow

Run linters and tests:

```bash
yarn test
```

Or run tests in watch mode:

```bash
yarn run test --watch
```

**Don’t forget to add tests and update documentation for your changes.**

**Please update yarn lock file (`yarn.lock`) if you add or update dependencies.**

## Commit messages

We follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) convention for our commit messages.
They will be used to generate version numbers, changelogs, and tags.

### Commit types

| type       | description                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| `build`    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)            |
| `ci`       | Changes to CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)        |
| `chore`    | Changes wich doesn't change source code or tests e.g. chnages to the build process, auxiliary tools, libraries |
| `docs`     | Documentation only changes                                                                                     |
| `feat`     | **A new feature**                                                                                              |
| `fix`      | **A bug fix**                                                                                                  |
| `perf`     | A code change that improves performance                                                                        |
| `refactor` | A code change that neither fixes a bug nor adds a feature                                                      |
| `revert`   | Revert something                                                                                               |
| `style`    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)         |
| `test`     | Adding missing tests or correcting existing tests                                                              |

## Other notes

- If you have commit access to repository and want to make big change or not sure about something, make a new branch and open pull request.
- We’re using [Prettier](https://github.com/prettier/prettier) to format code, so don’t worry much about code formatting.
- Don’t commit generated files, like minified JavaScript.
- Don’t change version number and changelog.

## Need help?

If you want to contribute but have any questions, concerns or doubts, feel free to ping maintainers. Ideally create a pull request with `WIP` (Work in progress) in its title and ask questions in the pull request description.
