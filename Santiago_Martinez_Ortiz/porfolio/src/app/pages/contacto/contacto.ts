import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contacto-root',
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ContactoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviado = false;

  enviar() {
    if (this.form.valid) {
      const nombre = this.form.value.nombre;
      const email = this.form.value.email;
      const mensaje = this.form.value.mensaje;
      const destinatario = 'martinezortiz.santiago@gmail.com';
      const asunto = encodeURIComponent('Contacto desde portfolio');
      const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);
      // Mostrar el JSON en consola
      const json = JSON.stringify({ nombre, email, mensaje }, null, 2);
      console.log('Datos del formulario:', json);
      window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
      this.form.reset();
      this.enviado = true;
      setTimeout(() => this.enviado = false, 4000);
    }
  }

  // ...existing code...
}
