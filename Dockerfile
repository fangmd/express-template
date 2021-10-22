FROM node:16.11.1
EXPOSE 3000

# create app directory
WORKDIR /app

# Copy files to image
COPY ["./package.json", "./package-lock.json", "tsconfig.json", "pm2.config.json", "/app/"]

# run npm install before copy ./src can help you cache images
RUN npm install

RUN npm run initLog

# Copy files to image "./.env.production", "./.env.development",
COPY ["./.env", "/app/"]

COPY ["./@types", "/app/@types"]

COPY ["./src", "/app/src"]

CMD ["npm", "run", "prd"]