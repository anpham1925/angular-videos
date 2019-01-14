import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    if (this.authService.token) {
      this.router.navigate(['video']);
    }
  }

  async login() {
    try {
      this.alertService.startLoading();
      const result = await this.authService.login({username: this.username, password: this.password});
      this.alertService.stopLoading();
      this.authService.setToken(result['token']);
      this.authService.setCurrentUser(result['user']);
      this.router.navigate(['video']);
    } catch (error) {
      this.alertService.stopLoading();
      this.alertService.showErrorMessage(error.error.message);
    }
  }
}
