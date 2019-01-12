import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONSTANTS} from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token;
  constructor(
    private http: HttpClient
  ) { }

  public login(data) {
    return this.http.post(CONSTANTS.API_LINK.AUTH.LOGIN, data).toPromise();
  }

  public signUp(data) {
    return this.http.post(CONSTANTS.API_LINK.AUTH.SIGN_UP, data).toPromise();
  }

  public logout() {
    this.token = '';
  }

  setToken(token) {
    console.log(this.token);
    console.log('ua co set token ko???');
    this.token = token;
    console.log(this.token);
  }
}
