# starter(react)<sup>js</sup>

[![Code Coverage][codecov-image]][codecov-url]
[![JavaScript Style Guide][style-image]][style-url]

Starter kit for the upcoming changes in Next.js.

## Overview

Overall, this starter kit provides the standard boilerplate constructs to develop and build a universal PWA with Next.js. It uses the latest: TypeScript, Docker, and Jest. Some opinions have been made revolving around the inclusion of GDPR and GA tracking requirements. It has some configurable project settings with included \*rc/\*ignore files for:

- [Docker](https://www.docker.com/) ([Dockerfile](./Dockerfile), [docker-compose.yml](./docker-compose.yml), and [.dockerignore](./.dockerignore))
- [Next](https://beta.nextjs.org) ([next.config.js](./next.config.js))
- [TypeScript](https://www.typescriptlang.org/) ([.tsconfig.json](./.tsconfig.json) and [.tsconfig.next.json](./.tsconfig.next.json))

I have added support for badges. Currently, this project is integrated with [CircleCI](https://circleci.com/) and [Codecov](https://codecov.io/) to provide build and coverage badges respectively. All are free for open source projects and should be used to provide quick references to the projects status as well as a way to automatically test pull requests.

## NPM

The project provides an extensible build process integrated with npm scripts. The following is a breakdown of npm scripts provided and how to use them:

- `npm run build` - to build production output.
- `npm run dev` - to start the application in a development environment.
- `npm run fix` - to automatically apply TS Standard Style to all TS code.
- `npm run lint` - to run TS Standard Style checks.
- `npm run release` - to test and build production code.
- `npm start` - to start the application in a production environment.
- `npm test` - to run CI unit tests.
- `npm run test:watch` - to run development unit tests.

## Docker

As mentioned previously, I have included full Docker support for development and production environments.

For development, it is strongly recommended to use `docker-compose` with the included [docker-compose.yml](./docker-compose.yml) file to achieve this. It provides a sandboxed evironment for development that is consistent throughout the whole life cycle of the application. Below is a summary of useful `docker-compose` CLI commands.

- `docker-compose build` to build the development image.
- `docker-compose up [--build]` to (re)create/start and optionally build the development container.
- `docker-compose restart` to restart ...
- `docker-compose stop` to stop ...
- `docker-compose rm` to delete ...
- `docker-compose down` to stop and remove ...

For production, builds are a multi-step process that is easily automated. Below is a short script to achieve this goal.

```shell
docker build -t fnalabs/docker-next-pwa .
docker run --name test -p 8080:80 fnalabs/docker-next-pwa
```

[LICENSE](./LICENSE)

[codecov-image]: https://img.shields.io/codecov/c/github/fnalabs/starter-react-js.svg
[codecov-url]: https://codecov.io/gh/fnalabs/starter-react-js

[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
