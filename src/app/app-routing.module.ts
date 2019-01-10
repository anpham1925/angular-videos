import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {VideoComponent} from './video/video.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'video', component: VideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
