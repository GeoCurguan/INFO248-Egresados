### Recordar
Para iniciar un proyecto en TypeScript
Se debe tener instalador node.js en el sistema 

Ejecutar: 
```zsh
npm install -g typescript
```
El comando anterior instala TS en el proyecto
<i>Utilizar sudo en caso de error</i>

```zsh
sudo npm install -g typescript
```


Se crea una estructura de directorios basica:

nombre_proyecto</br>
    \_ src</br>
    \_ dist (se crea automaticamente configurando tsconfig)</br>

En la raiz del proyecto:
```zsh
npm init -y
```
El comando anterior crea el archivo `package.json`

Ahora creamos el archivo `tsconfig.json`
```zsh
tsc --init
```
### Ya se puede escribir codigo TS en ./src