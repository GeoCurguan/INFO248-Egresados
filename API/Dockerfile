# Establece la imagen base
FROM node:14

# Establece el directorio de trabajo en la imagen
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install --production

# Copia los archivos de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 4000

# Instala MongoDB en el contenedor
RUN apt-get update && apt-get install -y gnupg2
RUN wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | apt-key add -
RUN echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/5.0 main" | tee /etc/apt/sources.list.d/mongodb-org-5.0.list
RUN apt-get update && apt-get install -y mongodb-org

# Crea el directorio para almacenar los datos de MongoDB
RUN mkdir -p /data/db

# Establece el comando para iniciar MongoDB y la aplicación
CMD mongod --bind_ip_all & npm run dev
