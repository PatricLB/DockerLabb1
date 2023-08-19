# Vald baseImage
FROM node:18

# Skapa working directory
WORKDIR /app/

# Kopiera package.json som innehåller dependencies
COPY package.json ./

# Installera dependencies i containern
RUN npm install

# Kopiera koden till docker imagen
COPY . .

# Öppna upp port 3000 som api:et använder
EXPOSE 3000

# Kommando för att köra applikationen
CMD ["node", "server.js"]
