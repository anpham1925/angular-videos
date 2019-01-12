import {Component, OnInit} from '@angular/core';
import {routes} from '../../../config/routes';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routes = routes;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
