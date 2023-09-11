# syntax=docker/dockerfile:1

FROM node:16-alpine
ENV NODE_ENV=developement

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "dev" ]