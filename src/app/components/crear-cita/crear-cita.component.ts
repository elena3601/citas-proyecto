<<<<<<< HEAD
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 206594ba0dacb8752d71801d40773cde1dd3cf67

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  nombre ='';
  fecha ='';
  hora ='';
  asunto ='';

  formularioIncorrecto = false;

<<<<<<< HEAD
  @Output() nuevaCita = new EventEmitter<any>();

=======
>>>>>>> 206594ba0dacb8752d71801d40773cde1dd3cf67
  constructor() { }

  ngOnInit(): void {
  }

  agregarCita (){
    if (this.nombre ==''|| this.fecha =='' || this.hora =='' || this.asunto =='' ){
  this.formularioIncorrecto = true;
  return;
    }
    this.formularioIncorrecto = false;
    //creamos objeto para enviarselos al padre
    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      asunto: this.asunto
    }
    console.log (CITA);
<<<<<<< HEAD
    this.nuevaCita.emit(CITA);
=======
>>>>>>> 206594ba0dacb8752d71801d40773cde1dd3cf67
    this.resetCampos();
  }

  resetCampos(){
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.asunto = '';
  }


}
