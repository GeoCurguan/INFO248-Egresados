CREATE DATABASE IF NOT EXISTS db_egresados;

USE db_egresados;

CREATE TABLE IF NOT EXISTS Usuario(
    -- Informacion personal
    id INT NOT NULL AUTO_INCREMENT,
    rut varchar(255) UNIQUE,
    nombres varchar(255),
    apellidos varchar(255),
    telefono varchar(255),
    descripcion  varchar(255),
    foto varchar(255),
    -- Informacion de localidad
    pais varchar(255),
    region varchar(255),
    comuna varchar(255),
    direccion varchar(255),
    -- Informacion de contacto
    instagram varchar(64),
    twitter varchar(64),
    facebook varchar(64),
    linkedin varchar(64),
    -- Informacion de la cuenta
    mail varchar(255),
    password varchar(255),
    categoria varchar(64),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Trabajo(
    id_trabajo INT NOT NULL AUTO_INCREMENT,
    ref_user_trabajo INT,
    -- Informacion del trabajo
    situacion_laboral varchar(255),
    lugar_de_trabajo varchar(255),
    cargo varchar(255),
    -- Informacion inicio y fin
    inicio varchar(255),
    fin varchar(255),
    PRIMARY KEY (id_trabajo),
    FOREIGN KEY (ref_user_trabajo) REFERENCES User (id)
);


CREATE TABLE IF NOT EXISTS Ofertas(
    id_oferta INT NOT NULL AUTO_INCREMENT,
    ref_user_oferta INT,
    -- Informacion de la oferta
    titulo varchar(255),
    descripcion varchar(255),
    duracion varchar(255),
    remuneracion INT,
    tipo varchar(255),
    -- Informacion extra
    fecha_creacion varchar(255),
    visibilidad varchar(255),
    PRIMARY KEY (id_oferta),
    FOREIGN KEY (ref_user_oferta) REFERENCES User (id)
);

CREATE TABLE IF NOT EXISTS Publicaciones(
    id_publicacion INT NOT NULL AUTO_INCREMENT,
    ref_user_publicacion INT,
    -- Informacion de la publicacion
    titulo varchar(255),
    descripcion TEXT,
    -- Informacion extra
    fecha_creacion varchar(255),
    PRIMARY KEY (id_publicacion),
    FOREIGN KEY (ref_user_publicacion) REFERENCES  User (id)
);


show tables;
INSERT INTO `User`(
    `rut`, `nombres`, `apellidos`, `telefono`, `descripcion`, `foto`,
    `pais`, `region`, `comuna`, `direccion`, 
    `instagram`, `twitter`, `facebook`, `linkedin`,
    `mail`, `password`, `categoria`)
    VALUES (
    '12345678-9','Juan Emilio','Perez Rodriguez','123456789','Estudiante de ingenieria informatica','https://i.imgur.com/gXcZxLr_d.webp?maxwidth=760&fidelity=grand',
    'Chile','Metropolitana','Santiago','Av. Siempre Viva 123',
    '@juanperez','@juanperez','JuanPerez362','juanperez',
    'JuanPerez@gmail.com','password123','user');
INSERT INTO `User`(
    `rut`, `nombres`, `apellidos`, `telefono`, `descripcion`, `foto`,
    `pais`, `region`, `comuna`, `direccion`, 
    `instagram`, `twitter`, `facebook`, `linkedin`,
    `mail`, `password`, `categoria`)
    VALUES (
    '1231232-k','','','','soy admin','https://i.imgur.com/wYTCtRu_d.webp?maxwidth=760&fidelity=grand',
    '','','','',
    '','','','',
    'pedro_admin@hotmail.com','soyadmin','admin');
-- Agregar trabajo
INSERT INTO `Trabajo`(
    `ref_user_trabajo`, `situacion_laboral`, `lugar_de_trabajo`, `cargo`, `inicio`, `fin`)
    VALUES (
    1,'Trabajando','Google','Programador','2019-12-12','2020-12-12');
INSERT INTO `Trabajo`(
    `ref_user_trabajo`, `situacion_laboral`, `lugar_de_trabajo`, `cargo`, `inicio`, `fin`)
    VALUES (
    1,'Trabajando','McDonalds','Gerente','2020-12-12','2022-12-12');
-- Crear publicacion u oferta
INSERT INTO `Publicaciones`(
    `ref_user_publicacion`, `titulo`, `descripcion`, `fecha_creacion`)
    VALUES (
    2,'Titulo de la publicacion','Descripcion de la publicacion','2020-12-12');
INSERT INTO `Ofertas`(
    `ref_user_oferta`, `titulo`, `descripcion`, `duracion`, `remuneracion`, `tipo`, `fecha_creacion`, `visibilidad`)
    VALUES (
    2,'Titulo de la oferta','Descripcion de la oferta','1 año','100000','Tiempo completo','2022-12-12','visible');

    -- Ejemplo consulta User con Trabajo; utilizando JOIN
/* SELECT nombres,lugar_de_trabajo, inicio,fin FROM `User` INNER JOIN `Trabajo` ON `User`.`id` = `Trabajo`.`ref_user_trabajo`;
*/ 