# start with Alpine Linux Node image for development
FROM node:14.15.1-alpine as development

ARG APP_PATH="/opt/webapp"
ARG NODE_ENV="development"
ARG PORT="3000"

# set environment variables
ENV NODE_ENV="${NODE_ENV}" \
    PORT="${PORT}" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"

# Project code
COPY . ${APP_PATH}/

# change to workspace and run project install script
WORKDIR ${APP_PATH}
RUN apk add --update --no-cache bash-completion && \
    bash ./bin/install && \
    npm run release

# expose standard Node.js port of 3000
EXPOSE ${PORT}

# start with Alpine Linux Node image for production
FROM node:14.15.1-alpine as production

ARG APP_PATH="/opt/webapp"
ARG NODE_ENV="production"
ARG PORT="3000"

# set environment variables
ENV NODE_ENV="${NODE_ENV}" \
    PORT="${PORT}"

# Project code
COPY --from=development ${APP_PATH}/dist ${APP_PATH}/dist/
COPY bin ${APP_PATH}/bin/
COPY package.json package-lock.json LICENSE ${APP_PATH}/

# change to workspace and run project install script
WORKDIR ${APP_PATH}
RUN apk add --update --no-cache bash-completion && \
    bash ./bin/install

# expose standard Node.js port of 3000
EXPOSE ${PORT}

# NOTE: change CMD to be command to start node webapp
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]
