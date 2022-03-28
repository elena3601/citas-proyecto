# Citasonline
Repositorio para proyecto de clase

-Nombre del proyecto: Citas On-Line UTXJ

-Integrantes del equipo:
  -Diana Marina Roldán Ríos
  -Laura Elena Hernández Colina
  -Daniel Gutiérrez Melendez
  -Eder Ulises Pérez Jácome
  
-Objetivo del proyecto: Desarrollar un sistema que permita agendar citas en las diferentes áreas que conforman servicios escolares.
 
-Tipos de usuarios:
  -Usuario estandar
  -Usuario administrador
 
-Funcionalidades:
<<<<<<< HEAD
-Agendar citas
-El administrador sera quien asigne citas a los usuarios
-Establecer responsables
=======
-Agendar citas: 
-login:Solo tendra acceso el administrador quien sera el encargado de agendar la cita.
-Establecer responsables:En este caso los responsables seran quienes la redirijan.
-Formulario:Este sera manipulado por el administrador en el cual se recopilara los siguientes datos de cada uno de los usuarios, nombre,fechanac,horario en que asistir y el motivo.
>>>>>>> 206594ba0dacb8752d71801d40773cde1dd3cf67
  
	-CRUD Operaciones fundamentales de aplicaciones persistentes en sistemas de bases de datos: 
		Crear registros 
		Leer registros 
		Actualizar registros 
		Borrar registros
 
-Entorno de desarrollo: 
	-Visual Studio Code 
	-Bootstrap
	-Angular
	-MySql
	-Xampp

# Propuesta del diseño de la base de datos
- ![modelo de base de datos](https://user-images.githubusercontent.com/77304407/160256801-e453e393-5966-4233-88b4-9de08ff0e7d1.png)
# Componentes principales
-Crear cita
-Listar cita
-Dashboard
-Listar Usuarios
# Propuesta de wireframe para el proyecto
- Listar usuarios
- ![WhatsApp Image 2022-03-24 at 7 21 58 PM](https://user-images.githubusercontent.com/77304438/160256249-c76a2045-b9e4-4fe1-8b96-f1f3b6628c94.jpeg)
- Formulario para agregar o editar usuario
- ![WhatsApp Image 2022-03-24 at 7 23 09 PM](https://user-images.githubusercontent.com/77304438/160256250-b41e4258-db54-470a-94ff-3ec7351fc634.jpeg)
- Mensaje de advertencia
- ![WhatsApp Image 2022-03-24 at 7 24 53 PM](https://user-images.githubusercontent.com/77304438/160256251-f8a24bc9-84f4-481e-b726-2f191bfb317e.jpeg)
- Agendar y listar citas
- ![WhatsApp Image 2022-03-24 at 7 55 30 PM](https://user-images.githubusercontent.com/77304438/160256252-470a7c89-3312-4c7c-b258-d55d1c4dd311.jpeg)
- Login
- ![WhatsApp Image 2022-03-24 at 8 16 56 PM](https://user-images.githubusercontent.com/77304438/160256253-c2ccce33-9ef9-4e32-ac19-a12a9755fe39.jpeg)
# propuesta Back-end
Editor de texto 
Visual Studio Code es un editor de texto plano desarrollado por Microsoft totalmente gratuito y de código abierto para ofrecer a los usuarios una herramienta de programación avanzada como alternativa al Bloc de Notas. Este editor está escrito totalmente en Electron, un framework utilizado para unir Chromium y Node.

                                  Node js
Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.

JavaScript
avaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,  basado en prototipos, imperativo, débilmente tipado y dinámico. 

	MysQl	

MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos

Bootstrap
Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.

Angular
Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

Rutas

<button style="width: 100%;" (click)="agregarCita()" class="btn btn-primary btn-block">Agregar Cita</button>

Al agregar la cita, se crea un recuadro con la información el cual se lleno el formulario 

<div *ngFor="let cita of listadoCitas; let i = index" class="card mb-2">
    <div class="card-body">
        <p class="card-text"><span>Nombre: </span>{{ cita.nombre }}</p>
        <p class="card-text"><span>Fecha: </span>{{ cita.fecha }}</p>
        <p class="card-text"><span>Hora: </span>{{ cita.hora }}</p>
        <p class="card-text"><span>Asunto: </span>{{ cita.asunto}}</p>
           </div>

Controllers

Los controllers que utilizamos son muy básicos 

<p class="card-text"><span>Nombre: </span>{{ cita.nombre }}</p>

Enlasando  span a un css 

span {
    font-weight: 600;
}

<div *ngIf="listadoCitas.length === 0" class="card bg-light">
    <div class="card-body">
        <h5 class="card-title text-center">No hay citas para mostrar</h5>
    </div>

Enlasando card en CSS

.card{
    margin: 0px 40px;
}

<div class="text-center tituloClass">APLICACION DE CITAS</div>

Enlasando a tituloClass en CSS

.tituloClass{
    font-family: 'Raleway', sans-serif;
    font-size: 3rem;
    color: white;
}

Modelo de Formulario a utilizar (código fuente).. 

<h5 class="card-title text-center">Agregar Cita</h5>

        <div *ngIf ='formularioIncorrecto' class ='text-center'>
            <span class="badge bg-danger">Todos los campos son obligatorios</span>
        </div>
        
        <div class="form-group mb-3">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" [(ngModel)]="nombre" class="form-control" placeholder="Ingrese su nombre">
        </div>
        
        <div class="form-group mb-3">
            <label for="fecha">Fecha:</label>
            <input type="date" id="fecha" [(ngModel)]="fecha" class="form-control">
        </div>

        <div class="form-group mb-3">
            <label for="hora">Hora:</label>
            <input type="time" id="hora" [(ngModel)]="hora" class="form-control">
        </div>

        <div class="form-group mb-3">
            <label for="asunto">Asunto:</label>
            <textarea id="Asunto" [(ngModel)]="asunto" rows="3" class="form-control" placeholder="Describa el asunto"></textarea>
        </div>
<button style="width: 100%;" (click)="agregarCita()" class="btn btn-primary btn-block">Agregar Cita</button>
    </div>
</div>

Modelo de como se vería el formulario ya enviado para agendar..

<div *ngFor="let cita of listadoCitas; let i = index" class="card mb-2">
    <div class="card-body">
        <p class="card-text"><span>Nombre: </span>{{ cita.nombre }}</p>
        <p class="card-text"><span>Fecha: </span>{{ cita.fecha }}</p>
        <p class="card-text"><span>Hora: </span>{{ cita.hora }}</p>
        <p class="card-text"><span>Asunto: </span>{{ cita.asunto}}</p>
       
    </div>
blob:https://web.whatsapp.com/c31a9d13-ee15-4fd1-9aa5-da220e7cf1f7

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
