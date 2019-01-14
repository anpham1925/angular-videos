import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONSTANTS} from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token;
  currentUser;

  constructor(
    private http: HttpClient
  ) {
    console.log('ua sao ko goi check token?');
    this.checkToken();
  }

  public login(data) {
    return this.http.post(CONSTANTS.API_LINK.AUTH.LOGIN, data).toPromise();
  }

  public signUp(data) {
    return this.http.post(CONSTANTS.API_LINK.AUTH.SIGN_UP, data).toPromise();
  }

  public logout() {
    this.token = '';
    this.currentUser = null;
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('currentUser');
  }

  setToken(token) {
    this.token = token;
    window.localStorage.setItem('token', token);
  }

  setCurrentUser(user) {
    this.currentUser = user;
    window.localStorage.setItem('currentUser', JSON.stringify(user));
  }

  private checkToken() {
    try {
      const storedToken = window.localStorage.getItem('token');
      if (storedToken) {
        this.setToken(storedToken);
        this.setCurrentUser(JSON.parse(window.localStorage.getItem('currentUser')));
      }
    } catch (error) {
      console.log('no token');
    }
  }
}
