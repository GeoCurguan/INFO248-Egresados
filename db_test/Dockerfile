FROM mysql:8.0.33-debian

# Copy the SQL file to the Docker container
COPY db.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=egresados