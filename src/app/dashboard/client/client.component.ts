import { Component, OnInit } from '@angular/core';
import { ServiciosComponent } from '../../servicios/servicios.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [ServiciosComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  userName: string | null = null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = this.authService.getName();
  }

  goToMisCitas() {
    this.router.navigate(['mis-citas']); 
  }
}
