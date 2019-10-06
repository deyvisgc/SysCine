import { Component, OnInit, ViewChild } from '@angular/core';
import { PeliculasServices } from '../../../Servicios/peliculas-service.service';
import { Pelicula } from '../../../interfaces/Pelicula';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Users } from '../../../interfaces/users';
import { Alquiler } from '../../../interfaces/Alquiler';

@Component({
  selector: 'app-listarestreno',
  templateUrl: './listarestreno.component.html',
  styleUrls: ['./listarestreno.component.scss']
})
export class ListarestrenoComponent implements OnInit {
 
  public productAdd: Object[] = [];

  constructor(private peliculaService:PeliculasServices) {
    this.ListarPeliculas();
   }
  peli:Pelicula[];
  pel:Pelicula[];
  detaPeli:Pelicula[];
  selectUser:Users[];
  alquiler:Alquiler[];
  @ViewChild('myModal', {static: false}) public myModal: ModalDirective;
  @ViewChild('mydetalle', {static: false}) public mydetalle: ModalDirective;
  lista(id) {
    this.myModal.show();
    this.peliculaService.listar(id).subscribe((data:Pelicula[])=>{
      this.pel = data;
    
  })
}

  ListarPeliculas(){
    this.peliculaService.getPelicula().subscribe((data:Pelicula[])=>{
      this.peli=data;
    },(error)=>{
      console.log(error);
      alert('error al cargar los datos');
    })
  }
  Detallepelicula(id){
    this.mydetalle.show();
    this.peliculaService.listar(id).subscribe((data:Pelicula[])=>{
      this.detaPeli=data;

    });
    this.peliculaService.selectUser().subscribe((data:Users[])=>{
      this.selectUser=data;
    })
  }
  rpta:number;
  onKey(event){
    var inputValue = document.getElementById('Costo')["value"];
    this.rpta = inputValue -event.target.value;
    
  } 
 
  alqui: Alquiler= {
    Fecha_alquiler:null,
    Fecha_devolucion:null,
    Persona_idPersona:null,
    Estado_Pelicula:null,
    Pelicula_idPelicula:null,
    alquiler_vuelto:null,
    cantidad:null
  };
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
    estado_pelicula:null
  };


  
  Alquiler(){
    var alquiler_vuelto = document.getElementById('vuelto')["value"];
    var Fecha_alquiler = document.getElementById('fecha_inicio')["value"];
    var Fecha_devolucion = document.getElementById('fecha_fin')["value"];
    var Persona_idPersona = document.getElementById('user')["value"];
    var Estado_Pelicula='alquilado';
    var Pelicula_idPelicula=document.getElementById('idPelicula')["value"];
    var cantidad=document.getElementById('cantidad')["value"];
    var estado_pel='Alquilado';

    this.alqui.Fecha_alquiler=Fecha_alquiler;
    this.alqui.Fecha_devolucion=Fecha_devolucion;
    this.alqui.Estado_Pelicula=Estado_Pelicula;
    this.alqui.Persona_idPersona=Persona_idPersona;
    this.alqui.Pelicula_idPelicula=Pelicula_idPelicula;
    this.alqui.alquiler_vuelto=alquiler_vuelto;
    this.alqui.cantidad=cantidad;
    this.pelicu.estado_pelicula=estado_pel;
    console.log(this.alquiler);
      this.peliculaService.Alquiler(this.alqui).subscribe((data)=>{
        this.mydetalle.hide();
        alert('exito al alquilar su pelicula');
      })
      

  }
  
  


  ngOnInit() {
  }

}
