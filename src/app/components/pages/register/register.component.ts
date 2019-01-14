import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../services/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username;
  password;
  fullName;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
  }

  async signUp() {
    try {
      const result = await this.authService.signUp({
        username: this.username,
        password: this.password,
        fullName: this.fullName
      });
      this.alertService.showSuccessMessage('Successfully created account! Please login to continue');
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
      this.alertService.showErrorMessage(error.error.message);
    }
  }

  clear() {
    this.username = '';
    this.password = '';
    this.fullName = '';
  }

}
