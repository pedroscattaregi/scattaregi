import axios, { AxiosBasicCredentials } from 'axios';
import { consts } from '@root/config/consts';

export class HttpRequest {
  
  public get(url: string, auth: AxiosBasicCredentials, limit = consts.defaultLimit): Promise<void> {
    
    return axios({
      url: url,
      method: 'get',
      auth: auth,
      params: {
        limit: limit
      }
    }).then(response => {
      return response.data;
    });
  }

  public put(url: string, config: {auth: AxiosBasicCredentials; headers: object}, body: object): Promise<void> {
    return axios.put(url, body, config).then(response => {
      return response.data;
    });
  }
}


