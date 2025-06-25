import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../services/cita.service';
import { ServicioService } from '../../services/servicio.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  appointments: any[] = [];
  services: any[] = [];
  filters: { fecha?: string, servicioId?: number, userId?: number } = {};
  currentEmployeeId: number | null = null;

  constructor(
    private citaService: CitaService,
    private servicioService: ServicioService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.currentEmployeeId = this.authService.getUserId();
    if (this.currentEmployeeId) {
      this.loadServices();
      this.loadAppointments();
    } else {
      console.error('No se pudo obtener el ID del empleado actual.');
      // Redirigir o mostrar un mensaje de error si no hay ID de empleado
    }
  }

  loadAppointments(): void {
    if (!this.currentEmployeeId) {
      return;
    }
    const currentFilters = { ...this.filters, employeeId: this.currentEmployeeId };
    this.citaService.getAllAppointments(currentFilters).subscribe({
      next: (data) => {
        this.appointments = data;
      },
      error: (err) => {
        console.error('Error al cargar citas:', err);
      }
    });
  }

  loadServices(): void {
    this.servicioService.getServicios().subscribe({ 
      next: (data) => {
        this.services = data;
      },
      error: (err) => {
        console.error('Error al cargar servicios:', err);
      }
    });
  }

  applyFilters(): void {
    this.loadAppointments();
  }

  clearFilters(): void {
    this.filters = {};
    this.loadAppointments();
  }

  onDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.filters.fecha = inputElement.value;
  }

  onServiceChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.filters.servicioId = selectElement.value ? Number(selectElement.value) : undefined;
  }

  onClientChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.filters.userId = inputElement.value ? Number(inputElement.value) : undefined;
  }
}