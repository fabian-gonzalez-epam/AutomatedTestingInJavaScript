const {actor} = require('./../screenplay')
const { pages } = require('./../po');

describe("Test suite", () => {
    it("Check incorrect login", async function() {
        
        this.retries(1);
        await actor('student').login()
        expect (await actor('student').checkIfNoEnter()).to.equal("Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.")
        //expect (await actor('student').checkIfNoEnter()).to.equal("We are having trouble verifying reCAPTCHA for this request. Please try again. If the problem persists, try another browser/device or reach out to Atlassian Support.")
    
    }); 

    it("Check correct login", async function() {
        
        this.retries(1);
        await actor('epamer').login()
        expect (await actor('epamer').checkIfEnter()).to.be.true 
    
    });
    
    it("Add tenth board", async function() {
        this.retries(1);

        /* Screenplay implementation
        await actor('epamer').addBoard()
        expect (await actor('epamer').checkBoardExist()).to.be.true 
        */
        
        await pages('dashboard').header.addButton.waitForDisplayed()
        await pages('dashboard').header.addButton.waitForEnabled()
        await pages('dashboard').header.addButton.click()
        await pages('dashboard').header.selection('create').waitForDisplayed()
        await pages('dashboard').header.selection('create').waitForEnabled()
        await pages('dashboard').header.selection('create').click()
        await pages('dashboard').addBoard.input.waitForDisplayed()
        await pages('dashboard').addBoard.input.waitForEnabled()
        await pages('dashboard').addBoard.input.setValue('Board 10')
        await pages('dashboard').addBoard.createButton.waitForDisplayed()
        await pages('dashboard').addBoard.createButton.waitForEnabled()
        await pages('dashboard').addBoard.createButton.click()
        await pages('dashboard').sideMenu.board('board10').waitForDisplayed();
        expect(await pages('dashboard').sideMenu.board('board10').isDisplayed()).to.be.true
    
    });
    
    it("Can't add more than ten boards", async function() {
        
        this.retries(1);
        await pages('dashboard').header.addButton.waitForDisplayed()
        await pages('dashboard').header.addButton.waitForEnabled()
        await pages('dashboard').header.addButton.click()
        await pages('dashboard').header.selection('create').click()
        await pages('dashboard').addBoard.input.waitForDisplayed()
        await pages('dashboard').addBoard.input.waitForEnabled()
        await pages('dashboard').addBoard.input.setValue('Board 11')
        await pages('dashboard').addBoard.upgradeWorkspaceButton.waitForDisplayed();
        expect(await pages('dashboard').addBoard.upgradeWorkspaceButton.isDisplayed()).to.be.true
    
    });
    it("Cant add a list without name", async function() {
        
        this.retries(1)
        await pages('board').canvas.addListButton.waitForDisplayed();
        await pages('board').canvas.addListButton.waitForEnabled();
        await pages('board').canvas.addListButton.click();
        await pages('board').canvas.input.setValue(''); 
        expect(await pages('board').canvas.list('list1').isDisplayed()).to.be.false
    
    });

    it("Can add a list with a name", async function() {
       
        this.retries(1)
        await pages('board').canvas.input.setValue('List 1'); 
        await pages('board').canvas.confirmButton.waitForDisplayed()
        await pages('board').canvas.confirmButton.waitForEnabled()
        await pages('board').canvas.confirmButton.click();
        await pages('board').canvas.list('list1').waitForDisplayed();
        expect(await pages('board').canvas.list('list1').isDisplayed()).to.be.true
    
    });
    
    it("Can change profile name if it not exist", async function() {
        
        this.retries(1);
        await pages('board').header.profileButton.click();
        await pages('board').header.menu_selection('profile_visibility').click();
        await pages('profile').usernameForm.input.waitForDisplayed()
        await pages('profile').usernameForm.input.waitForEnabled()
        await pages('profile').usernameForm.input.setValue('fabiangonzalez195');
        await pages('profile').usernameForm.saveButton.click();
        await pages('profile').usernameForm.successLabel.waitForDisplayed();
        expect(await pages('profile').usernameForm.successLabel.isDisplayed()).to.be.true
    
    });
    it("Cant change profile name if it already exist", async function() {
        
        this.retries(1);
        
        await pages('profile').usernameForm.input.waitForDisplayed()
        await pages('profile').usernameForm.input.waitForEnabled()
        await pages('profile').usernameForm.input.setValue('fabiangonzalez');
        await pages('profile').usernameForm.saveButton.click();
        await pages('profile').usernameForm.errorLabel.waitForDisplayed();
        expect(await pages('profile').usernameForm.errorLabel.isDisplayed()).to.be.true
    
    });
      
})
