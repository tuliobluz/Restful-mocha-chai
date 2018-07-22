var request = require("request");
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = chai.should();

var baseUrl = "https://swapi.co/api"

chai.use(chaiHttp);

describe("/GET people", function () {
    it("returns luke", function (done) {
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