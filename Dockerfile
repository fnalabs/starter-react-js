# start with Alpine Linux Node for base image
FROM node:20.10.0-alpine as base

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

COPY . /opt/webapp/
WORKDIR /opt/webapp
RUN npm ci --quiet --no-optional && \
    npm run release

EXPOSE ${PORT}
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "dev"]

# start with development step for production
FROM nginx:1.25.2-alpine
COPY example.conf /etc/nginx/conf.d/default.conf
COPY --from=development /opt/webapp/out /var/www/out
COPY --from=development /opt/webapp/.next/sw.js /var/www/out
