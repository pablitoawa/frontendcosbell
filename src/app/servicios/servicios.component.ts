import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];

  constructor(private servicioService: ServicioService, private router: Router) {}

  ngOnInit() {
    this.servicioService.getServicios().subscribe(data => {
      console.log('Datos de servicios recibidos:', data);
      this.servicios = data;
    });
  }

  agendarCita(servicioId: number) {
    this.router.navigate(['/agendar-cita/new', servicioId]);
  }
}