import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';
  asunto = '';

  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita() {
    if(this.nombre == '' || this.fecha == '' || this.hora == '' || this.asunto == ''){
      this.formularioIncorrecto = true;
      return;
    } 
    this.formularioIncorrecto = false;

    // Creamos objeto para enviarselo al padre
    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      asunto: this.asunto
    }
    console.log(CITA);
    this.nuevaCita.emit(CITA);
    this.resetCampos();
  }

  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.asunto = '';
  }

}
