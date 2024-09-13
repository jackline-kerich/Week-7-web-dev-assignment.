const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('/server'); // Path to your server file
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Endpoints', () => {
    it('should return a list of expenses', (done) => {
        chai.request(app)
            .get('/expenses/:userId')
            .end((err, res) => {
                if (err) {
                    done(err); // Pass error to Mocha if request fails
                } else {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done(); // Indicate that the test is complete
                }
            });
    });

    // Additional tests can be added here
});
