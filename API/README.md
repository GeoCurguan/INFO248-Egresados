# Cómo Testear la API (ThunderClient)

## Dockerizar

construir imagen:

docker build -t api .

Levantar imagen:

docker run -p 4000:4000 api

## SIGNIN

### Request URL

**(POST) SIGN IN:**

```bash
http://localhost:4000/api/auth/signin
```

**BODY**

```json
{
  "email": "test@gmail.com",
  "password": "test"
}
```

**(POST) Create Post: Requiere autenticación con jwt**

```bash
http://localhost:4000/api/posts/createPost/{User-Id}

ej:
http://localhost:4000/api/posts/createPost/647c0e40a83a48860956c52d
```

**BODY**

```json
{
  "author": "Diego",
  "title": "Busco informatico experto en flutter",
  "image": "null",
  "date": "28/06/2023",
  "body": "Busco informatico que haga una aplicación mobil que me avise cada vez que mi gata se pare chueca",
  "type": "Oferta laboral"
}
```

**(DELETE) Delete Post: Requiere autenticación con jwt**

```bash
http://localhost:4000/api/posts/deletePost/{id_POST}

ej:
http://localhost:4000/api/posts/deletePost/649cad9df8bc28bb51d0c357




El body debe llevar el tipo de post:
body:
{
  "type" : "noticia"
}
```

**(GET) Get All POSTS**

```bash
http://localhost:4000/api/posts/getAllPosts
```

**(GET) Get POST BY ID**

```bash
http://localhost:4000/api/posts/getPostById/{id_post}
ej:
http://localhost:4000/api/posts/getPostById/649cac1640be7acefb



En el body se debe enviar el tipo de publicación


body:
{
  "type" : "beneficio"
}
```

**(GET) get post by type**

```
http://localhost:4000/api/posts/getPostByType/{tipo_de_post}

EJ:
http://localhost:4000/api/posts/getPostByType/oferta_laboral

tipos: 

oferta_laboral
noticia
beneficio


```
