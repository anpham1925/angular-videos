import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../../services/video/video.service';
import {environment} from '../../../../environments/environment';
import {CONSTANTS} from '../../../config/constants';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videos = [];
  selectedVideo;
  latitude;
  longitude;
  radius;

  constructor(
    private _videoService: VideoService,
    private _santinizer: DomSanitizer
  ) {
  }

  async ngOnInit() {

  }

  changeVideo(video) {
    this.selectedVideo = video;
  }

  getVideos() {
    if (
      Number(this.latitude) !== +this.latitude ||
      Number(this.longitude) !== +this.longitude ||
      Number(this.radius) !== +this.radius
    ) {
      return alert('check input');
    }
    const params = {
      'key': environment.youtube_api_key,
      'location': `${this.latitude},${this.longitude}`,
      'locationRadius': `${this.radius}km`,
      'part': 'snippet',
      'q': 'surfing',
      'type': 'video'
    };
    this._videoService.getVideos(params).subscribe(
      (result): any => {
        this.videos = result['items'];
        this.videos.map(v => v.embeddedLink = this._santinizer.bypassSecurityTrustResourceUrl(CONSTANTS.YOUTUBE_WATCH_LINK + v.id.videoId));
        this.changeVideo(this.videos[0]);
      },
      error => {
        console.log(error);
      });
  }
}
