FROM node:alpine
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "start"]


#0be55da0d1fffb7e37a68f7d17d702370ce425f9bff33