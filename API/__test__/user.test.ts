import { expect } from 'chai';
import { describe, it } from 'mocha';
import User, { IUser } from '../src/models/User';

describe('User Model', () => {
  it('Deberia encryptarse la contraseña correctamente', async () => {
    const user: IUser = new User({
      rut: '123456789',
      email: 'test@example.com',
      password: 'password123',
      rol: 'Egresado',
    });

    const encryptedPassword = await user.encryptPassword(user.password);

    expect(encryptedPassword).to.not.equal(user.password);
  });

  it('Valida si el usuario ingresa una contraseña incorrecta', async () => {
    let user: IUser = new User({
        email: 'testtt@gmail.com',
        password: 'tobyflaco',
    });

    const encryptedPassword = await user.encryptPassword(user.password);

    user.password = encryptedPassword;

    const invalidPassword = await user.validatePassword('contraseña123');

    expect(invalidPassword).to.be.false;
  });

  it('Valida si el usuario ingresa una contraseña correcta', async () => {
    let user: IUser = new User({
        email: 'testtt@gmail.com',
        password: 'contraseña123',
    });

    const encryptedPassword = await user.encryptPassword(user.password);

    user.password = encryptedPassword;

    const validPassword = await user.validatePassword('contraseña123');

    expect(validPassword).to.be.true;
  });
});

/*

> db.users.find()
{ "_id" : ObjectId("647cff3467df25623d9857fa"), 
"nombres" : "Pepisto", 
"apellidos" : "tosrres", 
"rut" : "2035s4841-2", 
"email" : "poroto-tosby@gmail.com", 
"password" : "$2a$10$sBfXsUifcTYV8CNv2jIFIu7eR4bWrwTjQTOozCy7WF4ZpuslZ1kre", 
"rol" : "Egresado", 
"telefono" : null, 
"descripcion" : null, 
"foto" : null, 
"pais" : null, 
"region" : null, 
"comuna" : null, 
"direccion" : null, 
"instagram" : null, 
"twitter" : null, 
"facebook" : null, 
"linkedin" : null, 
"__v" : 0 }

*/
