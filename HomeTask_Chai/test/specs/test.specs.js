//const { expect } = require("chai");

describe("Test suite", () => {
    it("First test", async function() {
        this.retries(1);

        await browser.url("https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D");
        await $("input[name='username']").waitForDisplayed();
        await $("input[name='username']").setValue("fabian@epam.com");
        await $("//button[@id='login-submit']").click();
        const password_input = await $("input[name='password']");
        await password_input.waitForDisplayed()
        await password_input.addValue('1234')
        await $("//button[@id='login-submit']").click();
        const emailError = await $("span.css-xal9c7");
        const emailError_message = await emailError.getText();
        console.log(emailError_message);
        //await expect(emailError).toHaveTextContaining("We are having trouble verifying reCAPTCHA for this request. Please try again. If the problem persists, try another browser/device or reach out to Atlassian Support.")
        //expect(emailError_message).to.equal("Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.")
        expect(emailError_message).to.equal("We are having trouble verifying reCAPTCHA for this request. Please try again. If the problem persists, try another browser/device or reach out to Atlassian Support.")
    });
    
    it("Second test", async function() {
        this.retries(1);
        await browser.url("https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D");
        await $("input[name='username']").waitForDisplayed();
        await $("input[name='username']").setValue("fabian_gonzalez@epam.com");
        await $("//button[@id='login-submit']").click();
        await $("input[name='password']").waitForDisplayed();
        const password_input = await $("input[name='password']");
        await password_input.setValue('AFmt&!UGeY6aQ#')
        await $("//button[@id='login-submit']").click();
        const page_title = await $("//h3[text()='YOUR WORKSPACES']")
        //expect(page_title).to.exists;
        await (page_title).waitForDisplayed();
        expect(await page_title.isDisplayed()).to.be.true;
    });

    it("Third test", async function() {
        this.retries(1);
        const add_board_button = await $("div.board-tile.mod-add")
        await (add_board_button).waitForEnabled();
        await expect(add_board_button).to.exists;
        add_board_button.click();
        await $("button.hY6kPzdkHFJhfG.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc").click();
        const board_title_input = await $("input.nch-textfield__input.lsOhPsHuxEMYEb.lsOhPsHuxEMYEb.VkPAAkbpkKnPst");
        await (board_title_input).waitForDisplayed();
        //await expect (board_title_input).toBeDisplayed()
        //await expect (board_title_input).toBeClickable()
        await board_title_input.setValue('Board 10')
        await $("//button[text()='Create']").click()
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        let boards_label = await $("p.tgJa7wPCZQ3fAO").getText();
        expect(boards_label).to.equal("0 boards remaining")
    });
    
    it("Fourth test", async function() {
        this.retries(1);
        await $("button.o7EAj6bxSlZptk.d4KYiLd7mYtzsQ.bxgKMAm3lq5BpA.SEj5vUdI3VvxDc").click();
        await $("button.gJDsPins_eYkBM").click();
        const board_title_input = await $("input.nch-textfield__input.lsOhPsHuxEMYEb.lsOhPsHuxEMYEb.VkPAAkbpkKnPst");
        await (board_title_input).waitForEnabled()
        await board_title_input.setValue('Board 11')
        //expect (await $("//button[text()='Upgrade Workspace']")).toBeDisplayed();
        await $("button.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.PnEv2xIWy3eSui.SEj5vUdI3VvxDc").waitForDisplayed();
        await expect(await $("button.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.PnEv2xIWy3eSui.SEj5vUdI3VvxDc").isDisplayed()).to.be.true;
    });

    it("Fifth test", async function() {
        this.retries(1);
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        await $("div.B1uWdim9Jd0dJ9").click();
        await $("//span[text()='Profile and visibility']").click();
        const username_input = await $("input[name='username']");
        await (username_input).waitForEnabled()
        await username_input.setValue('fabiangonzalez195')
        await $("//button[text()='Save']").click();
        await $("//span[text()='Saved']").waitForDisplayed();
        expect(await $("//span[text()='Saved']").isDisplayed()).to.be.true;
    });

    it("Sixth test", async function() {
        this.retries(1);
        //await $("div.B1uWdim9Jd0dJ9").click();
        //await $("//span[text()='Profile and visibility']").click();
        const username_input = await $("input[name='username']");
        await (username_input).waitForEnabled()
        await username_input.setValue('')
        await username_input.setValue('fabiangonzalez')
        await $("//button[text()='Save']").click()
        await $("p#SaveProfileError_Field_username").waitForDisplayed();
        await $("p#SaveProfileError_Field_username").waitForEnabled();
        await expect(await $("p#SaveProfileError_Field_username.DAlSQcdYjddT3r").isDisplayed()).to.be.true;
    });

    it("Seventh test", async function() {
        this.retries(1);
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        await $("//div[text()='Board 10']").click();
        const add_list_button = await $("//button[text()='Add a list']");
        await (add_list_button).waitForEnabled()
        add_list_button.click();
        const add_list_form = await $("//textarea[@class='oe8RymzptORQ7h']");
        await (add_list_form).waitForEnabled()
        add_list_form.setValue("");
        await $("//button[text()='Add list']").click();
        let list_number = await $("h2.KLvU2mDGTQrsWG")
        //await expect(list_number).toHaveChildren(2)
        expect(list_number).to.not.equal("");
    });

    it("Eigth test", async function() {
        //this.retries(1);
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        await $("//div[text()='Board 10']").waitForEnabled()
        await $("//div[text()='Board 10']").click();
        const add_list_button = await $("//button[text()='Add a list']");
        await (add_list_button).waitForEnabled()
        add_list_button.click();
        const add_list_form = await $("//textarea[@class='oe8RymzptORQ7h']");
        await (add_list_form).waitForEnabled()
        add_list_form.setValue("List 1");
        const add_list_button_2 = await $("//button[text()='Add list']");
        await (add_list_button_2).waitForEnabled()
        //expect(add_list_button_2).to.exist;
        add_list_button_2.click();
        let list_number = await $("h2.KLvU2mDGTQrsWG").getText()
        //await expect (list_number).toBeDisplayed()
        //await expect(list_number).toHaveChildren(3)
        //await (list_number).waitForEnabled()
        expect(list_number).to.equal("List 1");
    });

    it("Ninth test", async function() {
        this.retries(1);
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        const settings_button = await $("//span[text()='Settings']"); 
        await (settings_button).waitForDisplayed();
        settings_button.click()
        await $("button.Ch1Opdvr77xkJp.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.SEj5vUdI3VvxDc").click();
        const workspace_name = await $("input#name.eTwcS5CiH1AoFb");
        await (workspace_name).waitForDisplayed()
        //await expect (workspace_name).toBeClickable()
        await workspace_name.setValue('userworkspace1332836');
        await $("//button[text()='Save']").click()
    });
    
    it("Tenth test", async function() {
        this.retries(1);
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        settings_button = await $("//span[text()='Settings']"); 
        await (settings_button).waitForDisplayed();
        settings_button.click()
        await $("button.Ch1Opdvr77xkJp.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.SEj5vUdI3VvxDc").click();
        workspace_name = await $("input#name.eTwcS5CiH1AoFb");
        await (workspace_name).waitForDisplayed();
        await workspace_name.setValue('');
        await workspace_name.setValue('userworkspace');
        await $("//button[text()='Save']").click()
        const error_message = await $("//span[text()='Short name is taken.']");
        await error_message.waitForDisplayed();
        expect(await error_message.isDisplayed()).to.be.true;    
    }); 
})
