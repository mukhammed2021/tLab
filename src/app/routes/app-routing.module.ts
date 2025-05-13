import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../../pages/about';
import { HomeComponent } from '../../pages/home';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
