# Configuraciones iniciales:
Ejecutar: 
```zsh
sudo npm install typescript tsc-node
```
# Se crea una estructura de directorios basica:
Ejemplo:
```
nombre_proyecto
    \_ src
    \_ dist* (*se crea automaticamente configurando tsconfig)
```

# En la raiz del proyecto:
Creamos el archivo `package.json`
```zsh
npm init -y
```

Ahora creamos el archivo `tsconfig.json`
```zsh
tsc --init
```
Ya se puede escribir codigo TS en ./src

# Dependencias utilizadas (en caso de algun error)

Libreria para sql, permite realizar operaciones
```zsh
npm install mysql2

```
Express
```zsh
npm install express @types/express
```

En caso de error con el modulo `fs`
```zsh
npm install --save-dev @types/node
```

# Configurar un nuevo usuario (root) en mysql (mariadb)

Verificar que el servicio esta funcionando:
```zsh
 sudo systemctl status mariadb
```

En caso contrario:
```zsh
 sudo systemctl start mariadb
```

Iniciar sesion como root:
```zsh
sudo mysql -u root
```

Crear un nuevo usuario:
```zsh
CREATE USER 'user_name'@'%' IDENTIFIED BY 'password';
```

Asignarles los permisos:
```zsh
GRANT ALL PRIVILEGES ON *.* TO 'user_name'@'%';
```

Guardar cambios:
```zsh
FLUSH PRIVILEGES;
exit
```

Iniciar sesion como el nuevo usuario:
```zsh
mysql -u user_name -p
```
