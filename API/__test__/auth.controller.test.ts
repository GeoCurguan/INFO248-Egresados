import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';

describe('Auth Controller', () => {
  it('debería registrarse correctamente', (done) => {
    const userData = {
      email: 'tester2@gmail.com',
      password: 'test',
      nombres: 'yeah man',
      apellidos: 'el yeah',
      rut: '234527811-9',
      rol: 'egresado'
    };

    request('http://localhost:4000') // Modificar aquí para apuntar a localhost:4000
      .post('/api/auth/signup')
      .send(userData)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.email).to.equal(userData.email);
        done();
      });
  });

  it('no deberia registrar denuevo a un usuario existente', (done) => {
    const userData = {
      email: 'tester2@gmail.com',
      password: 'test',
      nombres: 'yeah man',
      apellidos: 'el yeah',
      rut: '234527811-9',
      rol: 'egresado'
    };

    request('http://localhost:4000') // Modificar aquí para apuntar a localhost:4000
      .post('/api/auth/signup')
      .send(userData)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('debería iniciar sesión correctamente', (done) => {
    const userData = {
      email: 'tester2@gmail.com',
      password: 'test'
    };

    request('http://localhost:4000') // Modificar aquí para apuntar a localhost:4000
      .post('/api/auth/signin')
      .send(userData)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.email).to.equal(userData.email);
        done();
      });
  });

  it('debería iniciar sesión incorrectamente', (done) => {
    const userData = {
      email: 'tester2@gmail.com',
      password: 'contraseña pa mala'
    };

    request('http://localhost:4000') // Modificar aquí para apuntar a localhost:4000
      .post('/api/auth/signin')
      .send(userData)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});


