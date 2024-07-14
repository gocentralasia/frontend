FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app/frontend

COPY --from=build /app/frontend/build ./build

RUN npm install -g http-server

CMD ["http-server", "./build", "-p", "3000"]
