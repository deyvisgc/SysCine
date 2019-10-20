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
  detalleAlquiler:Temporal[];
  vercarrito:Temporal[];
  @ViewChild('myModal', {static: false}) public myModal: ModalDirective;
  @ViewChild('mydetalle', {static: false}) public mydetalle: ModalDirective;
  @ViewChild('myAlquiler', {static: false}) public myAlquiler: ModalDirective;
  @ViewChild('div', {static: false}) div: ElementRef;
  @ViewChild('tabla2',{static: false})  tabla2: ElementRef;

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
    });
  }
  

  alqui: Alquiler= {
    Fecha_alquiler:null,
    Fecha_devolucion:null,
    Persona_idPersona:null,
    Estado_Pelicula:null,
    Pelicula_idPelicula:null,
    alquiler_vuelto:null,
    total:null
  };
  tem:Temporal={
    idPersona: null,
    Canitdad:null,
    Fecha_Alquiler:null,
    Fechafin: null,
    Total: null,
    idPelicula:null,
    subtotal:null,
    costo:null,
    VAR_Per_nombre:null,
    Var_count:null,
    total_venta:null,
    var_Cantidad:null,
    var_costo_pelicula:null,
    var_subtotal:null,
    var_Titulo:null,


   }
  Agregar(){
    this.tabla2.nativeElement.remove();
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
    this.peliculaService.agregarCarrito(this.tem).subscribe((data:Temporal[])=>{
      console.log(this.temporal=data);
     // this.mydetalle.hide();

      alert('exito al alquilar su pelicula');
    })


  }
  //evento para sacar el vuelto

  Alquilar(){
    var id=document.getElementById('idperso')["value"];
    this.myAlquiler.show();
    this.peliculaService.detalle(id).subscribe((data:Temporal[])=>{
     console.log( this.detalleAlquiler = data);
  })

  }
  VERCARRITO(){
    
    var Persona_idPersona1 = document.getElementById('user')["value"];
    this.peliculaService.verCarrito(Persona_idPersona1).subscribe((data:Temporal[])=>{
      this.vercarrito=data;
    });

  
  }
  
  rpta:number;
  keyup(event){
    var inputValue = document.getElementById('total')["value"];
    this.rpta =parseFloat(event)- parseFloat(inputValue) ;
   
   
    
  } 
  Pagar(){
    var Persona_idPersona = document.getElementById('id_alquiler_Perso')["value"];
    var Pelicula_idPelicula = document.getElementById('id_alquiler_Pelicula')["value"];
    var alquiler_vuelto = document.getElementById('VUELTO')["value"];
    var total = document.getElementById('total')["value"];

    this.alqui.Persona_idPersona=Persona_idPersona;
    this.alqui.Pelicula_idPelicula=Pelicula_idPelicula;
    this.alqui.alquiler_vuelto=alquiler_vuelto;
    this.alqui.total=total;
  // console.log(this.alquiler);
    this.peliculaService.alquilarPelicula(this.alqui).subscribe((data)=>{
        this.myAlquiler.hide();
        alert('exito al alquilar su pelicula');
      })
     
  }

  ngOnInit() {
  }
  

}
