import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../../services/video/video.service';
import {environment} from '../../../../environments/environment';
import {CONSTANTS} from '../../../config/constants';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../services/alert/alert.service';

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
  nextPageToken;
  prevPageToken;

  constructor(
    private videoService: VideoService,
    private santinizer: DomSanitizer,
    public authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  async ngOnInit() {

  }

  changeVideo(video) {
    this.selectedVideo = video;
  }

  getVideos(page = '') {
    if (!this.authService.token) {
      alert('You can only search videos after logging in!');

      return this.router.navigate(['']);
    }

    if (!this.checkInput()) {
      return alert('check input');
    }
    const params = {
      'key': environment.youtube_api_key,
      'location': `${this.latitude},${this.longitude}`,
      // 'location': '21.5922529,-158.1147114',
      'locationRadius': `${this.radius}km`,
      'part': 'snippet',
      'type': 'video'
    };
    switch (page) {
      case 'next':
        if (!this.nextPageToken) {
          alert('cannot go to next page');
        }
        params['pageToken'] = this.nextPageToken;
        break;

      case 'prev':
        if (!this.nextPageToken) {
          alert('cannot go to previous page');
        }
        params['pageToken'] = this.prevPageToken;
        break;
      default:
    }
    this.alertService.startLoading();
    this.videoService.getVideos(params).subscribe(
      (result): any => {
        this.alertService.stopLoading();
        console.log(result);
        this.handleSearchVideoResult(result);
      },
      error => {
        console.log(error);
        this.alertService.stopLoading();
      });
  }

  changePage(action) {
    this.getVideos(action);
  }

  handleSearchVideoResult(result) {
    this.videos = result['items'];
    if (result['nextPageToken']) {
      this.nextPageToken = result['nextPageToken'];
    }
    if (result['prevPageToken']) {
      this.prevPageToken = result['prevPageToken'];
    }
    this.videos.map(v => v.embeddedLink = this.santinizer.bypassSecurityTrustResourceUrl(CONSTANTS.YOUTUBE_WATCH_LINK + v.id.videoId));
    this.changeVideo(this.videos[0]);
  }

  showMapModal() {
    if (!this.checkInput()) {
      return alert('check input');
    }

    $('#videoModal').modal('show');
  }

  checkInput() {
    if (
      Number(this.latitude) !== +this.latitude ||
      Number(this.longitude) !== +this.longitude ||
      Number(this.radius) !== +this.radius ||
      Number(this.latitude) < -90 ||
      Number(this.latitude) > 90 ||
      Number(this.longitude) < -180 ||
      Number(this.latitude) > 180
    ) {
      return false;
    }
    return true;
  }
}
