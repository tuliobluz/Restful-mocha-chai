'use strict';

var chai = require('chai');
var request = require('supertest');
var expect = chai.expect;

var url = 'https://reqres.in';

describe('API Tests', function() {
  var task = {
    name: 'integration test',
  };

    describe('Todos list API Integration Tests', function() {
      describe('#GET / tasks', function() { 
        it('should get all tasks', function(done) { 
          request(url).get('/api/users?page=2')
            .end(function(err, res) { 
              expect(res.statusCode).to.equal(200); 
              done(); 
            }); 
        });
      });
    });
});