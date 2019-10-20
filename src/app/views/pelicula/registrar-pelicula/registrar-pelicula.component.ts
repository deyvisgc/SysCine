import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PeliculasServices } from '../../../Servicios/peliculas-service.service';
import { Pelicula } from '../../../interfaces/Pelicula';

@Component({
  selector: 'app-registrar-pelicula',
  templateUrl: './registrar-pelicula.component.html',
  styleUrls: ['./registrar-pelicula.component.scss']
})

export class RegistrarPeliculaComponent implements OnInit {

  selectedFile: File;
  constructor(private peliculaService:PeliculasServices) { }
 peli:Pelicula={

  Genero: null,
  Titulo:null,
  Descripcion: null,
  foto_pelicula: null,
  video_Pelicula: null,
  Costo: null,
  Fecha_estreno:null,
  Cantidad_Pelicula: null,
  Ranking:null,
  Estado_Pelicula:null,
 }
  ngOnInit() {
  
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      let formData = new FormData();
      formData.append('file', this.selectedFile);
      console.log(formData.get('file'));
      console.log(JSON.stringify(formData))

      this.peliculaService.agregarPelicula(formData).subscribe((data:Pelicula[])=>{
       
        // this.mydetalle.hide();
   
         alert('exito al alquilar su pelicula');
       })
    }
  }
  
  RegistrarPelicula(){

    
    var titulo=document.getElementById('titulo')['value'];
    var genero=document.getElementById('genero')['value'];
    var precio=document.getElementById('precio')['value'];
    var fecha_estreno=document.getElementById('fecha_estreno')['value'];
    var cantidad=document.getElementById('cantidad')['value'];
    var Descripcion=document.getElementById('Descripcion')['value'];
    var hola=this.selectedFile;
   /* this.peli.foto_pelicula=hola;
    this.peli.Titulo=titulo;
    this.peli.Genero=genero;
    this.peli.Costo=precio;
    this.peli.Fecha_estreno=fecha_estreno;
    this.peli.Cantidad_Pelicula=cantidad;
    this.peli.Descripcion=Descripcion;
    */
    
      

      
  
   
  }
 
}
