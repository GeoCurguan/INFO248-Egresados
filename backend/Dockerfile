FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7667

RUN npm run build
CMD [ "npm", "run","start" ]
