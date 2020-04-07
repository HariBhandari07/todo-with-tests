const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-api');

Given('the user has browsed to the homepage', () => client.page.notesPage().navigate());

When('the user adds note {string}', function (note) {
    return client.page.notesPage().addNote(note).pause(2000)
})

Then('notes {string} should be displayed on the webUI', function (note) {
    return client.page.notesPage().assertNoteIsDisplayed(note)
})
