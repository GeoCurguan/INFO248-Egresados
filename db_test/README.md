# Crea una imagen 'custom' para MariaDB

docker build -t mydb-image .

# Ejecución de un contenedor con la imagen creada

docker run -d --name mydb-container -p 4000:3306 mydb-image
