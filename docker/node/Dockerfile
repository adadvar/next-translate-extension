# FROM node:16.20.0-alpine3.17
FROM node:18-alpine3.19

WORKDIR /app

COPY /package.json ./

COPY /next.config.mjs ./next.config.mjs

COPY . .

RUN  npm install

EXPOSE 3000

ENV HOSTNAME "0.0.0.0"

CMD ["npm", "run", "dev"] 