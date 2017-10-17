const { Given, When, Then } = require("cucumber");

Given(/^A academic Item is created$/, async () => {
    console.log(12);
});

Then(/^a proposal named "(.*?)" is created$/, async (proposalName:string) => {
    console.log(proposalName);
});