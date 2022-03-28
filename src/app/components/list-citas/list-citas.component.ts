import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {
@Input() listadoCitas: any;
  @Output() deleteCita = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
eliminarCIta(index: number) {
  this.deleteCita.emit(index);
}
}
