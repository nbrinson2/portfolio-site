import { Injectable } from '@angular/core';
import { S3Client, GetObjectCommand, GetObjectCommandOutput } from '@aws-sdk/client-s3';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export enum ImageUrls {
  LOGO = 'https://nbrinson-portfolio-site.s3.amazonaws.com/logo.png',
}

@Injectable({
  providedIn: 'root'
})
export class S3BucketService {
  private readonly s3Client = new S3Client(environment.awsConfig);
  private readonly getObjectCommand = new GetObjectCommand({
    Bucket: 'nbrinson-portfolio-site',
    Key: '789c2666164e29ba9abe46fc3ccc27650de805511248f9f624661676ecd8a5e5'
  })
  private readonly options = {
    headers: {
      'Authorization': `AWS ${environment.awsConfig.credentials.accessKeyId}:<signature>`,
      'x-amz-date': this.getDate(),
      'x-amz-content-sha256': '<hash>',
    }
  };  

  constructor(private http:HttpClient) { }

  async getBucket(): Promise<GetObjectCommandOutput> {
    const goc = this.getObjectCommand;
    return await this.s3Client.send(this.getObjectCommand); 
  }

  public getImageUrl(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      map((data: Blob) => {
        const url = URL.createObjectURL(data);
        return url;
      })
    );
  }

  private getDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}
