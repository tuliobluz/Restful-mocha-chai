var request = require("request");
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = chai.should();

var baseUrl = "https://app.fakejson.com"

chai.use(chaiHttp);

describe("/POST human names", function () {
    it("Human names - Status 200", function (done) {
        let body = {
            token: '9JPCfxlPs2-7JPklIsd9M9aA',
            data: {
                nameFirst: 'Tulio',
                nameLast: 'Luz',
                nameMiddle: 'Bandeira',
                name: 'Tluz',
                namePrefix: 'Mr.',
                nameSuffix: 'BC'
            }
        };

        chai.request(baseUrl)
            .post("/q/")
            .send(body)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});