const { client } = require('nightwatch-api')
const util = require('util')

module.exports = {
    url() {
        return this.api.launch_url;
    },
    commands: {
        addNote(note) {
            return this
                .useXpath()
                .waitForElementVisible('@textInput')
                .setValue('@textInput', [note, client.Keys.ENTER])
        },
        assertNoteIsDisplayed(note) {
            const elem = util.format(this.elements.notes.selector, note)
            console.log(elem)
            return this.useXpath().expect.element(elem).to.be.visible
        }
    },
    elements: {
        textInput: {
          selector: '//input[@class="textInput"]',
          locateStrategy: "xpath"
        },
        notes: {
            selector: '//div[text()="%s"]',
            locateStrategy: "xpath"
        }
    }
}
