# imagen de node.js

FROM node:16

# directorio de trabajo
WORKDIR /app

# copiar el package.json
COPY package*.json ./

# instalar dependencias
RUN npm install

# copiar el resto de los archivos
COPY . .

# puerto
EXPOSE 3000

# comando para correr la aplicación
CMD ["npm", "run", "dev"]