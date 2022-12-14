import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './modules/admin-module/admin-layout.component';
import { AuthLayoutComponent } from './modules/auth-module/auth-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/admin-module/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, 
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/auth-module/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, 
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,
      //{ useHash: true }
    )
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
