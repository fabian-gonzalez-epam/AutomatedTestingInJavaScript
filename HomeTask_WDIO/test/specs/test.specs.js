describe("Test suite", () => {
    
    /* it("First test", async function() {
        await browser.url("https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D");
        await $("input[name='username']").setValue("fabian@epam.com");
        await $("//button[@id='login-submit']").click();
        const password_input = await $("input[name='password']");
        await password_input.waitForDisplayed({ // with params
            timeout: 3000,
            reverse: true,
            timeoutMsg: 'Desired element did not disappear',
            interval: 300
        })
        await expect (password_input).toBeClickable()
        await password_input.addValue('1234')
        await $("//button[@id='login-submit']").click();
        const emailError = await $("span.css-xal9c7");
        expect (await emailError.getText()).toEqual("Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.")
    });  */
    
    it("Second test", async function() {
        this.retries(1);
        await browser.url("https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D");
        await $("input[name='username']").setValue("fabian_gonzalez@epam.com");
        await $("//button[@id='login-submit']").click();
        
        /* await $("input[name='password']").waitForDisplayed({ // with params
            timeout: 3000,
            reverse: true,
            timeoutMsg: 'Desired element did not disappear',
            interval: 300
        }) */
        await $("input[name='password']").waitForDisplayed();
        const password_input = await $("input[name='password']");
        await password_input.waitForEnabled();
        await expect (password_input).toBeEnabled();
        await password_input.setValue('AFmt&!UGeY6aQ#')
        await $("//button[@id='login-submit']").click();
        const page_title = await $("//h3[text()='YOUR WORKSPACES']")
        expect (await page_title).toBeDisplayed();
    });

    /* it("Third test", async function() {
        this.retries(1);
        const add_board_button = await $("//button[@class='d4KYiLd7mYtzsQ YeuvAyHAsucO_n bxgKMAm3lq5BpA SEj5vUdI3VvxDc']")
        await expect (add_board_button).toBeClickable();
        add_board_button.click();
        await $("//button[@class='gJDsPins_eYkBM']").click();
        const board_title_input = await $("input[class='nch-textfield__input lsOhPsHuxEMYEb lsOhPsHuxEMYEb VkPAAkbpkKnPst']");
        await expect (board_title_input).toBeEnabled()
        await expect (board_title_input).toBeDisplayed()
        await expect (board_title_input).toBeClickable()
        await board_title_input.setValue('Board 10')
        await $("//button[text()='Create']").click()
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        let boards_label = await $("p.tgJa7wPCZQ3fAO");
        expect (await boards_label.getText()).toEqual("0 boards remaining")
    });

    it("Fourth test", async function() {
        this.retries(1);
        await $("//button[@class='d4KYiLd7mYtzsQ YeuvAyHAsucO_n bxgKMAm3lq5BpA SEj5vUdI3VvxDc']").click();
        await $("//button[@class='gJDsPins_eYkBM']").click();
        const board_title_input = await $("input[class='nch-textfield__input lsOhPsHuxEMYEb lsOhPsHuxEMYEb VkPAAkbpkKnPst']");
        await expect (board_title_input).toBeEnabled()
        await expect (board_title_input).toBeDisplayed()
        await expect (board_title_input).toBeClickable()
        await board_title_input.setValue('Board 11')
        expect (await $("//button[text()='Upgrade Workspace']")).toBeDisplayed();
    });

    it("Fifth test", async function() {
        this.retries(1);
        await $("//button[@class='YeuvAyHAsucO_n js-open-header-member-menu uKet9wgIeMCzrD bxgKMAm3lq5BpA SEj5vUdI3VvxDc']").click();
        await $("//span[text()='Profile and visibility']").click();
        const username_input = await $("input[name='username']");
        await expect (username_input).toBeEnabled()
        await expect (username_input).toBeDisplayed()
        await expect (username_input).toBeClickable()
        await username_input.setValue('fabiangonzalez195')
        await $("//button[text()='Save']").click()
        expect (await $("//span[text()='Saved']")).toBeDisplayed();
    });

    it("Sixth test", async function() {
        this.retries(1);
        await $("//button[@class='YeuvAyHAsucO_n js-open-header-member-menu uKet9wgIeMCzrD bxgKMAm3lq5BpA SEj5vUdI3VvxDc']").click();
        await $("//span[text()='Profile and visibility']").click();
        const username_input = await $("input[name='username']");
        await expect (username_input).toBeEnabled()
        await expect (username_input).toBeDisplayed()
        await expect (username_input).toBeClickable()
        await username_input.setValue('')
        await username_input.setValue('fabiangonzalez')
        await $("//button[text()='Save']").click()
        expect (await $("p#SaveProfileError_Field_username")).toBeDisplayed();
    });

    it("Seventh test", async function() {
        this.retries(1);
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        await $("//div[text()='Board 10']").click();
        const add_list_button = await $("//button[text()='Add a list']");
        await expect (add_list_button).toBeEnabled()
        await expect (add_list_button).toBeDisplayed()
        await expect (add_list_button).toBeClickable()
        add_list_button.click();
        const add_list_form = await $("//textarea[@class='oe8RymzptORQ7h']");
        await expect (add_list_form).toBeEnabled()
        await expect (add_list_form).toBeDisplayed()
        await expect (add_list_form).toBeClickable()
        add_list_form.setValue("");
        await $("//button[text()='Add list']").click();
        let list_number = await $("//ol[@class='KduRxx1lW4ExLH js-no-higher-edits u-fancy-scrollbar']")
        await expect(list_number).toHaveChildren(2)
    });

    it("Eigth test", async function() {
        this.retries(1);
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        await $("//div[text()='Board 10']").click();
        const add_list_button = await $("//button[text()='Add a list']");
        await expect (add_list_button).toBeEnabled()
        await expect (add_list_button).toBeDisplayed()
        await expect (add_list_button).toBeClickable()
        add_list_button.click();
        const add_list_form = await $("//textarea[@class='oe8RymzptORQ7h']");
        await expect (add_list_form).toBeEnabled()
        await expect (add_list_form).toBeDisplayed()
        await expect (add_list_form).toBeClickable()
        add_list_form.setValue("List 1");
        const add_list_button_2 = await $("//button[text()='Add list']");
        await expect (add_list_button_2).toBeClickable()
        add_list_button_2.click();
        let list_number = await $("//ol[@class='KduRxx1lW4ExLH js-no-higher-edits u-fancy-scrollbar']")
        await expect (list_number).toBeDisplayed()
        await expect(list_number).toHaveChildren(3)
    });

    it("Ninth test", async function() {
        this.retries(1);
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        const settings_button = await $("//span[text()='Settings']"); 
        await expect(settings_button).toBeDisplayed();
        settings_button.click()
        await $("//button[@class='Ch1Opdvr77xkJp bxgKMAm3lq5BpA iUcMblFAuq9LKn SEj5vUdI3VvxDc']").click();
        const workspace_name = await $("input#name.eTwcS5CiH1AoFb");
        await expect (workspace_name).toBeDisplayed()
        await expect (workspace_name).toBeClickable()
        await workspace_name.setValue('userworkspace1332836');
        await $("//button[text()='Save']").click()
    });
    
    it("Tenth test", async function() {
        this.retries(1);
        await browser.url("https://trello.com/u/fabiangonzalez195/boards");
        settings_button = await $("//span[text()='Settings']"); 
        await expect(settings_button).toBeDisplayed();
        settings_button.click()
        await $("//button[@class='Ch1Opdvr77xkJp bxgKMAm3lq5BpA iUcMblFAuq9LKn SEj5vUdI3VvxDc']").click();
        workspace_name = await $("input#name.eTwcS5CiH1AoFb");
        await expect (workspace_name).toBeDisplayed()
        await expect (workspace_name).toBeClickable()
        await workspace_name.setValue('');
        await workspace_name.setValue('userworkspace');
        await $("//button[text()='Save']").click()
        const error_message = await $("//span[text()='Short name is taken.']");
        await expect (error_message).toBeDisplayed()    
    }); */
})