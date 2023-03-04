import { Component, OnInit } from '@angular/core';
import { ImageUrls, S3BucketService } from '../services/s3-bucket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private s3BucketService: S3BucketService) { }

  ngOnInit(): void {
  }

  getImageUrl(): Observable<string> {
    return this.s3BucketService.getImageUrl(ImageUrls.LOGO);
  }
}
