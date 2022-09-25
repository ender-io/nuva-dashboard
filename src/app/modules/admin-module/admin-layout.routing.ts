import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { UserProfileComponent } from '../configuration-module/user-profile/user-profile.component';
import { TablesComponent } from './tables/tables.component';
import { TodoTablesComponent } from './to-do/todo-tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'todos', component: TodoTablesComponent },
];
