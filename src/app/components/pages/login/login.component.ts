import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';

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
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  async login() {
    try {
      const result = await this.authService.login({username: this.username, password: this.password});
      this.authService.setToken(result['token']);
      this.router.navigate(['/video']);
    } catch (error) {
      console.log('error', error);
    }
  }

}
