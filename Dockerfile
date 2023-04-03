# start with Alpine Linux Node for base image
FROM node:18.14.0-alpine as base

ARG APP_PATH="/opt/webapp"
ARG PORT="3000"
ENV PORT="${PORT}"

RUN apk add --update --no-cache \
        ca-certificates \
        dumb-init \
        openssl

# start with base image for development
FROM base as development

ARG NODE_ENV="development"
ENV NODE_ENV="${NODE_ENV}"

COPY . ${APP_PATH}/
WORKDIR ${APP_PATH}
RUN npm ci --quiet --no-optional && \
    npm run release

EXPOSE ${PORT}
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "dev"]

# start with base image for production
FROM base as production

ARG NODE_ENV="production"
ENV NODE_ENV="${NODE_ENV}"

COPY --from=development ${APP_PATH}/dist ${APP_PATH}/dist/
COPY package.json package-lock.json LICENSE ${APP_PATH}/

WORKDIR ${APP_PATH}
RUN npm ci --quiet --no-optional --production && \
    npm prune --production && \
    npm cache clean --force

EXPOSE ${PORT}
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]
