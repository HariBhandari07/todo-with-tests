const chromedriver = require('chromedriver')

module.exports = {
    src_folders: ['tests'],
    page_objects_path: './tests/acceptance/pageObjects',
    webdriver: {
        start_process: true
    },
    test_settings: {
        default: {
            selenium_host: '172.17.0.2',
            webdriver: {
                server_path: chromedriver.path,
                start_process: false
            },
            launch_url: 'http://172.17.0.1:3000',
            globals: {},
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                chromeOptions: {
                    args: ['disable-gpu'],
                    w3c: false
                }
            }
        }
    }
}
