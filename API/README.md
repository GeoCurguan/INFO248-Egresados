# Cómo Testear la API (ThunderClient)

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
  "title" : "Busco informatico experto en flutter",
  "image" : "null",
  "date" : "28/06/2023",
  "body" : "Busco informatico que haga una aplicación mobil que me avise cada vez que mi gata se pare chueca",
  "type" : "Oferta laboral"
}
```




**(DELETE) Delete Post:  Requiere autenticación con jwt**

```bash
http://localhost:4000/api/posts/deletePost/{id_POST}

ej:
http://localhost:4000/api/posts/deletePost/649cad9df8bc28bb51d0c357
```


**(GET) Get All POSTS**

```bash
http://localhost:4000/api/posts/getAllPosts
```

