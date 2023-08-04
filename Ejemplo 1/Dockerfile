# Desde que lenguaje o imagen queremos trabajar
FROM node:18

# Crear directorio virtual
WORKDIR /api

# Copiar archivos necesarios y previos
COPY package.json ./
COPY package-lock.json ./

# Ejecutar el comando para obtener las librerías
RUN npm install

COPY . ./

CMD ["node", "index.js"]