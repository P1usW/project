FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ENV PORT 8000

EXPOSE $PORT

CMD ["npx", "webpack", "serve", "--mode", "development", "--config", "webpack.dev.js"]