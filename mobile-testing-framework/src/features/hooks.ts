// Multiple After hooks are executed in the reverse order that they are defined (from bottom to top file)
import { After } from "cucumber";
import { SessionDetails } from "@root/src/utils/browserstack-api/session-details";
import { BrowserstackApiClient } from "@root/src/utils/browserstack-api/browsestack-api";
import { webdriver } from '@root/src/utils/webdriver/webdriver';
import cucumberJson from 'wdio-cucumberjs-json-reporter';

const oneMinute = 60000;

After({timeout: oneMinute, tags: '@login or @registration or @P2P-banQi-transfer'}, async () => {
   
  await browser.reset();
  
});

After({timeout: oneMinute}, async (Scenario) => {
  
  if (process.env.BROWSERSTACK_RUN === '1') {
    
    const sessionDetails = new SessionDetails(Scenario);
    const browserstackApiClient = new BrowserstackApiClient();

    await browserstackApiClient.updateSession(sessionDetails);  
  }

  await cucumberJson.attach(await webdriver.takeScreenshot(), 'image/png');
  
});