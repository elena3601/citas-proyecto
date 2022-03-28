import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   listCitias: any[] = [];
  title: any;


  agregarCita(cita: any) {
    this.listCitias.push(cita);
    console.log(this.listCitias);
  }

  eliminarCitaListado(index: number) {
    this.listCitias.splice(index, 1);
  }
}

