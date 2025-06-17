/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AdminComponent,
    ClientComponent,
    EmployeeComponent 
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}*/


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
