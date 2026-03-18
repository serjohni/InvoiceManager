FROM node:22-alpine AS frontend-build
WORKDIR /app/FrontEnd

COPY FrontEnd/package*.json ./
RUN npm ci

COPY FrontEnd/ ./
RUN npm run build

FROM node:22-alpine AS backend-build
WORKDIR /app/BackEnd

COPY BackEnd/package*.json ./
RUN npm ci

COPY BackEnd/ ./
RUN npm run prisma:generate
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app/BackEnd
ENV NODE_ENV=production

COPY BackEnd/package*.json ./
RUN npm ci --omit=dev

COPY --from=backend-build /app/BackEnd/dist ./dist
COPY --from=backend-build /app/BackEnd/prisma ./prisma
COPY --from=backend-build /app/BackEnd/src/generated ./src/generated
COPY --from=frontend-build /app/FrontEnd/dist ./public

RUN mkdir -p uploads

EXPOSE 8080

CMD ["npm", "start"]
