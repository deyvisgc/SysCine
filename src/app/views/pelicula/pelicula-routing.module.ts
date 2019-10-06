import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstrenoComponent } from './estreno.component';
import { ListarestrenoComponent } from './listarestreno/listarestreno.component';


const routes: Routes = [{
  path: '',
  component: EstrenoComponent,
  children: [
    {
      path: 'estrenos',
      component: ListarestrenoComponent,
      
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }
