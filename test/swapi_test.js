var request = require("request");
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = chai.should();

var baseUrl = "https://swapi.co/api"

chai.use(chaiHttp);

describe("/GET people", function () {
    it("Returns luke - Status 200", function (done) {
        chai.request(baseUrl)
            .get("/people/1/")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property("name");
                res.body.should.be.a("object");
                done();
            }
        )
    });
});

describe("/POST person", function () {
    it("Couldn't create one person - Status 405", function (done) {
        let person = {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: 
            [ 'https://swapi.co/api/films/2/',
                'https://swapi.co/api/films/6/',
                'https://swapi.co/api/films/3/',
                'https://swapi.co/api/films/1/',
                'https://swapi.co/api/films/7/' ],
            species: [ 'https://swapi.co/api/species/1/' ],
            vehicles: 
            [ 'https://swapi.co/api/vehicles/14/',
                'https://swapi.co/api/vehicles/30/' ],
            starships: 
            [ 'https://swapi.co/api/starships/12/',
                'https://swapi.co/api/starships/22/' ],
            created: '2014-12-09T13:50:51.644000Z',
            edited: '2014-12-20T21:17:56.891000Z',
            url: 'https://swapi.co/api/people/99/'
        }

        chai.request(baseUrl)
            .post("/people/")
            .send(person)
            .end((err, res) => {
                res.should.have.status(405);
                done();
            }
        )
    });
});