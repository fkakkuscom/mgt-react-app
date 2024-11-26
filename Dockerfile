ARG NODE_VERSION=20.17.0

FROM node:${NODE_VERSION}-alpine AS base

# All deps stage
FROM base AS deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci

# Build stage
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
RUN npm run build
RUN tar -czf dist.tar.gz dist

# Production stage
FROM base AS serve
ENV NODE_ENV=development
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app
ADD package.json ./
RUN npm install --location=global serve

EXPOSE 4848
CMD ["npx", "serve", "-s", "/app", "-p", "4848"]
