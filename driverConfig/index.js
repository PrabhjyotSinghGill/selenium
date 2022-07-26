const {Builder} = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

driver.get("https://www.mbam.qc.ca/en/");