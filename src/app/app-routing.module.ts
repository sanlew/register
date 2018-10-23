import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './account/register/register.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const clinicRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(clinicRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
