import { HttpRequest } from "@root/src/utils/api/http-request";
import { SessionDetails } from "@root/src/utils/browserstack-api/session-details";
import { environment } from "@root/config/environment";

export class BrowserstackApiClient {
  
  private auth = {username: environment.BROWSERSTACK_USER, password: environment.BROWSERSTACK_KEY};
  private baseurl  =  'https://api-cloud.browserstack.com/app-automate';
  private httpRequest = new HttpRequest();

  public getSession(sessionId: string): Promise<void> {
    const url = `${this.baseurl}/sessions/${sessionId}.json`;
    
    return this.httpRequest.get(url, this.auth);
  }

  public updateSession(sessionDetails: SessionDetails): Promise<void> {
    const url = `${this.baseurl}/sessions/${sessionDetails.id}.json`;
    const config = {
      auth: this.auth,
      headers: { "Content-Type":"application/json" }
    };
    const body = {
      "name": sessionDetails.name,
      "status":sessionDetails.status,
      "reason":""
    };

    return this.httpRequest.put(url, config, body);
  }

  public async getBuildUrl(buildName: string): Promise<string> {
    const url = `${this.baseurl}/builds.json`;
    let buildHash = '';
    const buildsLimit = 5;

    await this.httpRequest.get(url, this.auth, buildsLimit)
      .then((value) => {

        for (let i = 0; buildHash === '' && i < buildsLimit; i++) {
          if (value[i].automation_build.name === buildName) {
            buildHash = value[i].automation_build.hashed_id;
          }
        }      
      })
      .catch((err) => {
        console.error(`The build with name ${buildName} was not found`, err);
      });

    return `https://app-automate.browserstack.com/dashboard/v2/builds/${buildHash}`;
  }
  
}