FROM node:22-alpine3.19 as builder

WORKDIR /app
ENV NODE_ENV=development

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci

COPY src/ src/
RUN npm run build:typescript


FROM node:22-alpine3.19

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "build/index.js"]