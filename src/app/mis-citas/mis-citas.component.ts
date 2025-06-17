import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-citas.component.html',
  styleUrls: ['./mis-citas.component.css']
})
export class MisCitasComponent implements OnInit {
  citas: any[] = [];
  mensaje = '';
  email = '';

  constructor(private citaService: CitaService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.cargarCitas();
  }

  cargarCitas() {
    const userId = this.authService.getUserId();
    if (userId === null) {
      this.mensaje = 'Error: Debes iniciar sesión para ver tus citas.';
      this.citas = [];
      return;
    }
    this.citaService.getCitasPorUsuario(userId).subscribe({
      next: data => {
        console.log('Citas recibidas:', data);
        this.citas = data;
        this.mensaje = '';
      },
      error: err => {
        console.error('Error al cargar citas:', err);
        this.mensaje = err.error?.message || 'Error al cargar tus citas.';
        this.citas = [];
      }
    });
  }

  
  
  cancelarCita(id: number) {
    if (confirm('¿Seguro que deseas cancelar esta cita?')) {
      this.citaService.cancelarCita(id).subscribe({
        next: () => {
          this.mensaje = 'Cita cancelada correctamente';
          this.cargarCitas();
        },
        error: err => this.mensaje = err.error?.message || 'Error al cancelar'
      });
    }
  }

  editarCita(citaId: number) {
    this.router.navigate(['/agendar-cita/edit', citaId]);
  }

  goToDashboardClient() {
    this.router.navigate(['/dashboard-client']);
  }
}