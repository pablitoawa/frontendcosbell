import { Component } from '@angular/core';
import { ServiciosComponent } from '../../servicios/servicios.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [ServiciosComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  constructor(private router: Router) { }

  goToMisCitas() {
    this.router.navigate(['mis-citas']);
  }
}
