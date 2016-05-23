'use strict';

var request = require('supertest');
var expect = require('chai').expect;

var app = require('../../app');

describe('POST /api/basket', function() {
  it('should return {ok=1} when inserting a new basket', function (done) {
    request(app)
      .post('/api/basket')
      .send({refNumber:'123', productName:'Office 365'})
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res){
        if (err)
          return done(err);
        done();
      });
  });
});

describe('GET /api/basket/123', function() {
  it('should return {refNumber=123} when filtering for basket', function (done) {
    request(app)
      .get('/api/basket')
      .send({refNumber:'123'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res){
        if (err)
          return done(err);
        done();
      });
  });
});
