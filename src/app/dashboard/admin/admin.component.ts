import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../services/cita.service';
import { UserService } from '../../services/user.service';
import { ServicioService } from '../../services/servicio.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  appointments: any[] = [];
  employees: any[] = [];
  services: any[] = [];
  filters: { fecha?: string, employeeId?: number, servicioId?: number, userId?: number, clientEmail?: string } = {};
  // Aquí se podrían añadir propiedades para almacenar el ID del usuario cliente para el filtro.

  constructor(
    private citaService: CitaService,
    private userService: UserService,
    private servicioService: ServicioService
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
    this.loadServices();
    this.loadAppointments();
  }

  loadAppointments(): void {
    const currentFilters = { ...this.filters };

    // Si el filtro de cliente es un email, necesitamos buscar su userId.
    // Por ahora, asumimos que userId en el filtro ya es un ID.
    // Si necesitamos buscar por email, tendríamos que añadir lógica adicional aquí o en el backend.
    this.citaService.getAllAppointments(currentFilters).subscribe({
      next: (data) => {
        this.appointments = data;
      },
      error: (err) => {
        console.error('Error al cargar citas:', err);
      }
    });
  }

  loadEmployees(): void {
    this.userService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err) => {
        console.error('Error al cargar empleados:', err);
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

  // Métodos para manejar cambios en los filtros del HTML
  onDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.filters.fecha = inputElement.value;
  }

  onEmployeeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.filters.employeeId = selectElement.value ? Number(selectElement.value) : undefined;
  }

  onServiceChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.filters.servicioId = selectElement.value ? Number(selectElement.value) : undefined;
  }

  onClientChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    // Asumimos que aquí se introduce el ID del usuario cliente para el filtro.
    // Si se desea filtrar por email, se necesitaría una lógica adicional para resolver el ID del email.
    this.filters.userId = inputElement.value ? Number(inputElement.value) : undefined;
  }

  // Opcional: Para el filtrado por nombre de cliente, podrías necesitar un servicio de usuario que permita buscar por nombre/email
  // o una opción en el backend para filtrar citas por nombre de cliente.
  // Por ahora, el filtro userId asume que se introduce el ID del usuario.

  // Método para el filtrado por email, que requeriría una llamada adicional o un backend actualizado para buscar usuarios por email
  // private getUserIdByEmail(email: string): Observable<number | undefined> {
  //   // Implementar lógica para buscar el ID de usuario por email
  //   return new Observable(observer => {
  //     // Aquí iría la llamada a userService.getUserByEmail(email)
  //     // Por ahora, siempre devuelve undefined
  //     observer.next(undefined);
  //     observer.complete();
  //   });
  // }

  // En la tabla, para mostrar el nombre del cliente en lugar de solo el ID, se necesitaría:
  // 1. Que la entidad Appointment en el backend incluya el objeto User completo.
  // 2. O, en el frontend, hacer una llamada a userService.getUserById(cita.userId) para cada cita, lo cual no es eficiente.
  // Por simplicidad, por ahora se mostrará el email del cliente de la cita (que ya viene en Appointment). 
}