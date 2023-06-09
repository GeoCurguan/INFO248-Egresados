# Repositorio para la asignatura de INFO248-Egresados

Integrantes:

<ul>
  <li>Geovanni Curguan</li>
  <li>José Aillapi</li>
  <li>Manuel Care</li>
  <li>Gerson Andrade</li>
  <li>Alex Garnica</li>
  <li>Juan Pablo Pezo</li>
  <li>Jorge Andrade</li>
  <li>Estefano Espinoza</li>
  <li>Diego Hinrichs</li>
  <li>Jhonatan Friz</li>
<ul>

## ¿Cómo hacer un commit (VSCode)?

1.- Moverse a la branch de desarollo o crear una.

```bash
$ git switch dev
```

2.- Verificar nuestra **branch** actual (dev)

```bash
$ git branch
```

3.- Añadir **cambios**

```bash
$ git add .
```

4.- Hacer **commit**

```bash
$ git commit -m "Esto es un commit"
```

5.- Hacer **push**

```bash
$ git push origin dev
```

6.- Verificar **Merge && pull** para revisión
(Eso se hace en git)

## ¿Cómo iniciar App?

1.- Instalar dependencias.

```bash
$ npm i
```

2.- Ejecutar en desarrollo (dev)

```bash
$ npm run dev
```

3.- Construir proyecto (prod)

```bash
$ npm run build
```

4.- Iniciar proyecto (prod)

```bash
$ npm run start
```
## ¿Cómo crear imagen Docker?

0.- Antes
```bash
$ sudo systemctl start docker

```
1.- Ejecutar

```bash
$ docker compose up
```
