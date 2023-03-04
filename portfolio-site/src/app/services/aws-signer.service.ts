import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AwsSignerService {
  private readonly signer = new AWS.Signer({});
  private readonly region = environment.awsConfig.region;
  private readonly logoEndpoint = environment.awsConfig.endpoints.logo;
  private readonly requestOptions = {
    method: 'GET',
    url: this.logoEndpoint,
    headers: {},
  };

  constructor() {
    AWS.config.update({
      credentials: new AWS.Credentials(
        environment.awsConfig.credentials.accessKeyId,
        environment.awsConfig.credentials.secretAccessKey
      ),
      region: this.region,
    });
  }

  
}
