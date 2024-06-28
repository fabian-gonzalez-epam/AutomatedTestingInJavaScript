
const {actor} = require('./../screenplay')

describe("Test suite", () => {
    /* it("Check incorrect login", async function() {
        //this.retries(1);
        await actor('student').login()
        expect (await actor('student').checkIfNoEnter()).to.equal("We are having trouble verifying reCAPTCHA for this request. Please try again. If the problem persists, try another browser/device or reach out to Atlassian Support.")
    }); */
    it("Check correct login", async function() {
        //this.retries(1);
        await actor('epamer').login()
        expect (await actor('epamer').checkIfEnter()).to.be.true
    });
    it("Add tenth board", async function() {
        //this.retries(1);
        await actor('epamer').addBoard()
        //expect (await actor('epamer').checkBoardExist()).to.be.true
    });
     
})
