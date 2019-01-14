import {LoginComponent} from '../components/pages/login/login.component';
import {Routes} from '@angular/router';
import {VideoComponent} from '../components/pages/video/video.component';
import {RegisterComponent} from '../components/pages/register/register.component';
import {NotfoundComponent} from '../components/pages/notfound/notfound.component';
import {AuthGuard} from '../guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      displayName: 'Login',
      requiredAuth: false,
      isDisplayed: true
    }
  },
  {
    path: 'video',
    component: VideoComponent,
    canActivate: [AuthGuard],
    data: {
      displayName: 'Video',
      requiredAuth: true,
      isDisplayed: true
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      displayName: 'Sign up',
      requiredAuth: false,
      isDisplayed: true
    }
  },
  {
    path: '**',
    component: NotfoundComponent,
    data: {
      requiredAuth: false,
      isDisplayed: false
    }
  }
];
