FROM node:alpine as builder

WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY ./ ./

EXPOSE 5000

CMD ["npm", "start"]