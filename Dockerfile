FROM node:24-alpine3.21 as builder

WORKDIR /app
ENV NODE_ENV=development

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install -g pnpm  && pnpm install


COPY src/ src/
RUN pnpm run build:typescript


FROM node:24-alpine3.21

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "build/index.js"]