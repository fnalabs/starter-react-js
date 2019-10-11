# start with Alpine Linux Node image for development
FROM node:10.16.3-alpine as development

ARG APP_PATH="/opt/webapp"
ARG NODE_ENV="development"
ARG PORT="3000"

# set environment variables
ENV NODE_ENV="${NODE_ENV}" \
    PORT="${PORT}"

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
FROM node:10.16.3-alpine as production

ARG APP_PATH="/opt/webapp"
ARG NODE_ENV="production"
ARG PORT="3000"

# set environment variables
ENV NODE_ENV="${NODE_ENV}" \
    PORT="${PORT}"

# Project code
COPY --from=development ${APP_PATH}/bin ${APP_PATH}/bin/
COPY --from=development ${APP_PATH}/dist ${APP_PATH}/dist/
COPY --from=development ${APP_PATH}/package.json ${APP_PATH}/
COPY --from=development ${APP_PATH}/package-lock.json ${APP_PATH}/

# change to workspace and run project install script
WORKDIR ${APP_PATH}
RUN apk add --update --no-cache bash-completion && \
    bash ./bin/install

# expose standard Node.js port of 3000
EXPOSE ${PORT}

# NOTE: change CMD to be command to start node webapp
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]
