/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'client', component: ClientComponent },
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent) },
  { path: 'client', loadComponent: () => import('./client/client.component').then(m => m.ClientComponent) },
  { path: 'employee', loadComponent: () => import('./employee/employee.component').then(m => m.EmployeeComponent) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
