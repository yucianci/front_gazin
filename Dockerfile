FROM node:latest

WORKDIR /usr/app

COPY package.json /usr/app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "-p 3000"]