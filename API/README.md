<<<<<<< HEAD
TESTING:

instalar dependencias:

```
npm install && npm install ts-node && npm install mocha && npm install @types/mocha && npm install express morgan cors && npm install chai && npm install --save-dev @types/chai
```

comando de testeo:

```
npx mocha --require ts-node/register ./__test__/user.test.ts
```
=======
# Cómo Testear la API

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
>>>>>>> ac8a947c37bd0a8fbbf0339449d0a5ace38bc346
