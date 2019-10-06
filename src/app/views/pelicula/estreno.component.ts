import { Component, OnInit } from '@angular/core';
import { PeliculasServices } from '../../Servicios/peliculas-service.service';
import { Pelicula } from '../../interfaces/Pelicula';

@Component({
  selector: 'app-estreno',
  templateUrl: './estreno.component.html',
  styleUrls: ['./estreno.component.scss']
})
export class EstrenoComponent implements OnInit {
  peli:Pelicula[];
  pel:Pelicula[];
  pelicu: Pelicula= {
    Genero: null,
    Titulo:null,
    Descripcion: null,
    foto_pelicula:null,
    video_Pelicula: null,
    Costo: null,
    Fecha_estreno:null,
    Cantidad_Pelicula: null,
    Ranking:null,
    idPelicula:null,
    

  };
  constructor(private peliculaService:PeliculasServices ) { 
    this.ListarPeliculas();
  }

  ListarPeliculas(){
    this.peliculaService.getPelicula().subscribe((data:Pelicula[])=>{
      this.peli=data;
    },(error)=>{
      console.log(error);
      alert('error al cargar los datos');
    })
  }
  ngOnInit() {
  }

}
