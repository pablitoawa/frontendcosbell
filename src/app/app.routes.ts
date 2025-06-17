import { Routes } from '@angular/router';
//import { RegisterComponent } from './auth/register/register.component';
//import { LoginComponent } from './auth/login/login.component';
//import { AdminComponent } from './dashboard/admin/admin.component'; 


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
  { path: 'dashboard-admin', loadComponent: () => import('./dashboard/admin/admin.component').then(m => m.AdminComponent) },
  { path: 'dashboard-employee', loadComponent: () => import('./dashboard/employee/employee.component').then(m => m.EmployeeComponent) },
  { path: 'dashboard-client', loadComponent: () => import('./dashboard/client/client.component').then(m => m.ClientComponent) },
  { path: 'servicios', loadComponent: () => import('./servicios/servicios.component').then(m => m.ServiciosComponent) },
  { path: 'agendar-cita', loadComponent: () => import('./agendar-cita/agendar-cita.component').then(m => m.AgendarCitaComponent) },
  { path: 'agendar-cita/new/:servicioId', loadComponent: () => import('./agendar-cita/agendar-cita.component').then(m => m.AgendarCitaComponent) },
  { path: 'agendar-cita/edit/:citaId', loadComponent: () => import('./agendar-cita/agendar-cita.component').then(m => m.AgendarCitaComponent) },
  { path: 'mis-citas', loadComponent: () => import('./mis-citas/mis-citas.component').then(m => m.MisCitasComponent) },
  { path: '**', redirectTo: 'login' }
];

// Note: The above routes are lazy-loaded, meaning the components will be loaded only when the route is accessed.