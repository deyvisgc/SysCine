import { Component, OnInit } from '@angular/core';
import { PeliculasServices } from '../../../Servicios/peliculas-service.service';
import { Pelicula } from '../../../interfaces/Pelicula';

@Component({
  selector: 'app-reporte-pelicula',
  templateUrl: './reporte-pelicula.component.html',
  styleUrls: ['./reporte-pelicula.component.scss']
})
export class ReportePeliculaComponent implements OnInit {

  constructor(private peliculaService:PeliculasServices) { 
    this.reporte();
  }
  peli:Pelicula[];
  peli1:Pelicula[];
   reporte(){
    this.peliculaService.reporte().subscribe((data:Pelicula[])=>{
      this.peli = data;  });
      this.peliculaService.reporte1().subscribe((data:Pelicula[])=>{
        this.peli1 = data});
  
   }
  ngOnInit() {
  }

}
