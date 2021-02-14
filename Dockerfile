FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000
# Running the app
CMD [ "npm", "run", "start" ]