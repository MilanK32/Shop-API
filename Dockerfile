FROM node:14

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

ENV DB_URL=mongodb://mongo:27017/node-api

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]