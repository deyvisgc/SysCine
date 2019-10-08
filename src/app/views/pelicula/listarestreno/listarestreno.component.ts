import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { PeliculasServices } from '../../../Servicios/peliculas-service.service';
import { Pelicula } from '../../../interfaces/Pelicula';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Users } from '../../../interfaces/users';
import { Alquiler } from '../../../interfaces/Alquiler';
import { Temporal } from '../../../interfaces/Temporal';

@Component({
  selector: 'app-listarestreno',
  templateUrl: './listarestreno.component.html',
  styleUrls: ['./listarestreno.component.scss']
})
export class ListarestrenoComponent implements OnInit {
 
  public productAdd: Object[] = [];
 

  constructor(private peliculaService:PeliculasServices,private renderer:Renderer2) {
    this.ListarPeliculas();
   }
  peli:Pelicula[];
  pel:Pelicula[];
  detaPeli:Pelicula[];
  selectUser:Users[];
  alquiler:Alquiler[];
  temporal:Temporal[];
  @ViewChild('myModal', {static: false}) public myModal: ModalDirective;
  @ViewChild('mydetalle', {static: false}) public mydetalle: ModalDirective;
  @ViewChild('div', {static: false}) div: ElementRef;

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
/*  rpta:number;
  onKey(event){
    var inputValue = document.getElementById('Costo')["value"];
    this.rpta = inputValue -event.target.value;
    
  } 
  */

  alqui: Alquiler= {
    Fecha_alquiler:null,
    Fecha_devolucion:null,
    Persona_idPersona:null,
    Estado_Pelicula:null,
    Pelicula_idPelicula:null,
    alquiler_vuelto:null,
    cantidad:null
  };
  tem:Temporal={
    idPersona: null,
    Canitdad:null,
    Fecha_Alquiler:null,
    Fechafin: null,
    Total: null,
    idPelicula:null,
    subtotal:null,
    costo:null
   }
  
  Alquiler(){
    var Fecha_alquiler = document.getElementById('fecha_inicio')["value"];
    var Fecha_devolucion = document.getElementById('fecha_fin')["value"];
    var Persona_idPersona = document.getElementById('user')["value"];
    var Estado_Pelicula='alquilado';
    var Pelicula_idPelicula=document.getElementById('idPelicula')["value"];
    var cantidad=document.getElementById('cantidad')["value"];

    this.alqui.Fecha_alquiler=Fecha_alquiler;
    this.alqui.Fecha_devolucion=Fecha_devolucion;
    this.alqui.Estado_Pelicula=Estado_Pelicula;
    this.alqui.Persona_idPersona=Persona_idPersona;
    this.alqui.Pelicula_idPelicula=Pelicula_idPelicula;
    this.alqui.cantidad=cantidad;
    console.log(this.alquiler);
  /*    this.peliculaService.Alquiler(this.alqui).subscribe((data)=>{
        this.mydetalle.hide();
        alert('exito al alquilar su pelicula');
      })
      */
      

  }
  Agregar(){
    var Fecha_alquiler1 = document.getElementById('fecha_inicio')["value"];
    var Fecha_devolucion1 = document.getElementById('fecha_fin')["value"];
    var Persona_idPersona1 = document.getElementById('user')["value"];
    var Pelicula_idPelicula1=document.getElementById('idPelicula')["value"];
    var cantidad1=document.getElementById('cantidad')["value"];

    this.tem.idPersona=Persona_idPersona1;
    this.tem.Canitdad=cantidad1;
    this.tem.Fecha_Alquiler=Fecha_alquiler1;
    this.tem.Fechafin=Fecha_devolucion1;
    this.tem.idPelicula=Pelicula_idPelicula1;
    console.log(this.tem);
    this.peliculaService.Alquiler(this.tem).subscribe((data)=>{
      this.mydetalle.hide();
      alert('exito al alquilar su pelicula');
    })


  }
  ngOnInit() {
  }

}
