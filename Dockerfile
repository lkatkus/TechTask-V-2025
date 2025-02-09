FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --no-optional

COPY . .

RUN npm run build

FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html
