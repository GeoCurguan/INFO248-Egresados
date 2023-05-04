# Definimos la imagen de base
FROM node:latest
# Creamos un directorio de trabajo
WORKDIR /app
# Copiamos el archivo .json al directorio de trabajo
COPY package.json ./
# Instalamos las dependencias y typescript para generar el js
RUN npm install typescript -g
RUN npm i
# Copiamos el resto de archivos
COPY . .
# Obtener el código en javascript
RUN npm run build
# Ejecutamos el inicio de la aplicación
CMD ["npm","run","start"]