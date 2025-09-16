import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export interface ContactoPayload {
  nombre: string;
  email: string;
  contactoEmail: string;
  aviso: boolean;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class ContactoService {
  private http = inject(HttpClient);

  enviarContacto(data: ContactoPayload) {
    // Cambia la URL por la de tu API real
    return this.http.post('https://tu-api.com/contacto', data);
  }
}
