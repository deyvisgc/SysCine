import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarestrenoComponent } from './listarestreno/listarestreno.component';
import { ReportePeliculaComponent } from './reporte-pelicula/reporte-pelicula.component';
import { RegistrarPeliculaComponent } from './registrar-pelicula/registrar-pelicula.component';


const routes: Routes = [{
  path: '',
  data: {
    title: 'Peliculas'
  },

  children: [
    {
      path: 'estrenos',
      component: ListarestrenoComponent,
    },
    {
      path: 'Reportes',
      component: ReportePeliculaComponent, 
    },
    {
      path: 'Registrar',
      component: RegistrarPeliculaComponent, 
    },
  ],
  
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }
