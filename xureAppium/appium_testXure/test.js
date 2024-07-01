const {remote} = require('webdriverio');

const capabilities = {
    platformName: 'Android', 'appium:automationName':'UiAutomator2',
    'appium:deviceName': 'c8ee9635', 
    'appium:appPackage':'com.android.settings', 
    'appium:appActivity':'.settings',
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || "0.0.0.0",
    port: parseInt(process.env.APPIUM_PORT,10) || 4723,
    logLevel: 'info',
    capabilities
};

async function runMyFirstTest(){
    const driver = await remote(wdOpts);
    try{
        const batteryItem = await driver.$('//*[@text="Battery"]');
        await batteryItem.click();
    }finally{    
        await driver.pause(1000);
        await driver.deleteSession();
    }
}

runMyFirstTest().catch(console.error);
