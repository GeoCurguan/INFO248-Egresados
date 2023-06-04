TESTING:

instalar dependencias:

```
npm install && npm install ts-node && npm install mocha && npm install @types/mocha && npm install express morgan cors && npm install chai && npm install --save-dev @types/chai
```

comando de testeo:

```
npx mocha --require ts-node/register ./__test__/user.test.ts
```