TESTING:

instalar dependencias:

```
npm install && npm install ts-node && npm install mocha && npm install @types/mocha && npm install express morgan cors && npm install chai && npm install --save-dev @types/chai
```
```
npm i --save-dev @types/supertest

```
comando de testeo (/API):

```
npx mocha --require ts-node/register ./__test__/user.test.ts
```
```
npx mocha --require ts-node/register ./__test__/auth.controller.test.ts
```
```
npx mocha --require ts-node/register ./__test__/post.controller.test.ts
```
