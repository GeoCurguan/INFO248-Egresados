import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';

describe('Post Controller', () => {
  it('debería postear correctamente', (done) => {
    
    
    const postData = {
        _id: "6486635a944c40aba081a3ed",
        author: "JOSE ROBERTO",
        title: "JOSE ROBERTO COSPLAY",
        date: "23/23/23",
        body: "JOSE ROBERTO HIZO UN COSPLAY AYER",
        type: "Publication"
    };

    request('http://localhost:4000') // Modificar aquí para apuntar a localhost:4000
      .post('/api/posts/createPost')
      .send(postData)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        //expect( ).to.equal( );
        expect(res.body.success).to.equal(true);
        expect(res.body.message).to.equal('Post creado exitosamente');
        expect(res.body.post.author).to.equal(postData.author);
        expect(res.body.post.title).to.equal(postData.title);
        expect(res.body.post.date).to.equal(postData.date);
        expect(res.body.post.body).to.equal(postData.body);
        expect(res.body.post.type).to.equal(postData.type);
        done();
      });
  });

});
