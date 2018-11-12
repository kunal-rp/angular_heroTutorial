import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {HerosComponent} from './heros/heros.component'
import {HeroDetailComponent} from './hero-detail/hero-detail.component'
import {DashboardComponent} from './dashboard/dashboard.component'

const routes : Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  {path:'dash',component:DashboardComponent},
  {path:'heroes',component:HerosComponent},
  {path:'detail/:id', component:HeroDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
