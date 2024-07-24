const axios = require("axios");
const enviroment = require('../enviroments/trello.enviroment.json');
const fs = require('fs');

describe("Trello Api", () => {
    it("Create Board", async function() {
        let data = {
            "name": enviroment.boardName,
            "idOrganization": "668613e6d03925c4a78c3e75",
            "key" : enviroment.ApiKey,
            "token": enviroment.ApiToken
        };

        let config = {
            method: 'post',
            url: 'https://api.trello.com/1/boards',
            data : data
        };

        await axios.request(config)
            .then((response) => {
                enviroment.boardId = response.data.id;
                fs.writeFileSync("../Home_Task_Screenplay/src/enviroments/trello.enviroment.json", JSON.stringify(enviroment));
                expect(response.data.name).to.equal(enviroment.boardName);
                expect(response.status).to.equal(200);
                expect(response.header).to.include("application/json; charset=utf-8");
            })
            .catch((error) => {
                console.log(error);
                //console.log(error.response.data.message);
        });
    });

    it("Get Board", async function() {
        let config = {
            method: 'get',
            url: 'https://api.trello.com/1/boards/' + enviroment.boardId 
                 + '?key=' + enviroment.ApiKey 
                 + '&token=' + enviroment.ApiToken,
        };

        await axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                expect(response.data.name).to.equal(enviroment.boardName);
                expect(response.status).to.equal(200);
                expect(response.header).to.include("application/json; charset=utf-8");
                
            })
            .catch((error) => {
                console.log(error);
        });
    });

    it("Update Board", async function() {
        let data = {
            "name": "Updated Board",
            "desc": "We update the board",
            "key" : enviroment.ApiKey,
            "token": enviroment.ApiToken
        };

        let config = {
            method: 'put',
            url: 'https://api.trello.com/1/boards/' + enviroment.boardId,
            data : data 
        };

        await axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                expect(response.data.name).to.equal("Updated board");
                expect(response.status).to.equal(200)
                expect(response.header).to.include("application/json; charset=utf-8");

            })
            .catch((error) => {
                console.log(error);
        });
    });

    it("Delete Board", async function() {
        let data = {
            "key" : enviroment.ApiKey,
            "token": enviroment.ApiToken
        };

        let config = {
            method: 'delete',
            url: 'https://api.trello.com/1/boards/' + enviroment.boardId,
            data : data 
        };

        await axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                expect(response.data).to.include("null");
                expect(response.status).to.equal(200)
                expect(response.header).to.include("application/json; charset=utf-8");
            })
            .catch((error) => {
                console.log(error);
        });
    });

    it("Get Board - Unauthorized", async function() {
        let config = {
            method: 'get',
            url: 'https://api.trello.com/1/boards/' + enviroment.boardId 
                 + '?key=' + 'invalid_api'
                 + '&token=' + 'invalid_token',
        };

        await axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error.response.data);
                expect(error.response.data).to.include("invalid key");
                expect(error.response.status).to.equal(401);
                //expect(error.response.header).to.include("text/plain; charset=utf-8"); 
        });
    });

    it("Get Board - Not exist", async function() {
        let config = {
            method: 'get',
            url: 'https://api.trello.com/1/boards/' + enviroment.boardId 
                 + '?key=' + enviroment.ApiKey 
                 + '&token=' + enviroment.ApiToken,
        };

        await axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error.response.data);
                expect(error.response.data).to.include("The requested resource was not found.");
                expect(error.response.status).to.equal(404);
                //expect(error.response.header).to.include("text/plain; charset=utf-8"); 
        });
    });

    it("Update Board - Invalid name", async function() {
        let data = {
            "name": "",
            "desc": "We update the board",
            "key" : enviroment.ApiKey,
            "token": enviroment.ApiToken
        };

        let config = {
            method: 'put',
            url: 'https://api.trello.com/1/boards/' + enviroment.boardId,
            data : data 
        };

        await axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error.response.data.message);
                expect(error.response.data.message).to.include("invalid value for name");
                expect(error.response.status).to.equal(400);
                //expect(response.header).to.include("application/json; charset=utf-8");
        });
    });
      
})
