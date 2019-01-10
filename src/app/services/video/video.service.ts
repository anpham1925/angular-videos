import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONSTANTS} from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private http: HttpClient
  ) {
  }

  getVideos(data) {
    console.log(data);
    return this.http.get(CONSTANTS.API_LINK.YOUTUBE.SEARCH, {params: data});
  }
}
