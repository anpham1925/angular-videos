import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';

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
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  signUp() {
    try {
      const result = this.authService.signUp({
        username: this.username,
        password: this.password,
        fullName: this.fullName
      });

      alert('Successfully created account! Go to login page to login');
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }

}
