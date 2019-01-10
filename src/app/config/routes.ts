import {LoginComponent} from '../components/pages/login/login.component';
import {Routes} from '@angular/router';
import {VideoComponent} from '../components/pages/video/video.component';
import {RegisterComponent} from '../components/pages/register/register.component';



export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      displayName: 'Login'
    }
  },
  {
    path: 'video',
    component: VideoComponent,
    data: {
      displayName: 'Video'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      displayName: 'Sign up'
    }
  }
];
