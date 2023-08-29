FROM node:lts-alpine AS builder
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
RUN ng build --prod

FROM nginx:1.19.10-alpine
COPY --from=builder /usr/src/app/dist/client /usr/share/nginx/html

