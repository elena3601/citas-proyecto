<<<<<<< HEAD
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 206594ba0dacb8752d71801d40773cde1dd3cf67

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {
<<<<<<< HEAD
@Input() listadoCitas: any;
=======
@input() listadoCitas: any;
>>>>>>> 206594ba0dacb8752d71801d40773cde1dd3cf67
  @Output() deleteCita = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
eliminarCIta(index: number) {
  this.deleteCita.emit(index);
}
}
