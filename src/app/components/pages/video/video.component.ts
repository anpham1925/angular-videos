import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../../services/video/video.service';
import {environment} from '../../../../environments/environment';
import {CONSTANTS} from '../../../config/constants';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videos = [];

  constructor(
    private _videoService: VideoService
  ) {
  }

  async ngOnInit() {
    const params = {
      'key': environment.youtube_api_key,
      'location': '21.5922529,-158.1147114',
      'locationRadius': '10km',
      'part': 'snippet',
      'q': 'surfing',
      'type': 'video'
    };
    this._videoService.getVideos(params).subscribe(
      (result): any => {
        this.videos = result['items'];
        this.videos.map(v => v.embeddedLink = CONSTANTS.YOUTUBE_WATCH_LINK + v.id.videoId);
        console.log(this.videos);
      },
      error => {
        console.log(error);
      });
  }
}
