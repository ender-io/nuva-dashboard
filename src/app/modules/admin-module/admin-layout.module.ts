import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { UserProfileComponent } from '../configuration-module/user-profile/user-profile.component';
import { TablesComponent } from './tables/tables.component';
import { TodoTablesComponent } from './to-do/todo-tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    IconsComponent,
    MapsComponent,
    TablesComponent,
    TodoTablesComponent,
  ]
})

export class AdminLayoutModule {}
