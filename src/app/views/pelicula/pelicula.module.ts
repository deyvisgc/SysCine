import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaRoutingModule } from './pelicula-routing.module';
import { EstrenoComponent } from './estreno.component';
import { ListarestrenoComponent } from './listarestreno/listarestreno.component';
import { CarouselsComponent } from '../base/carousels.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CardsComponent } from '../base/cards.component';
import { FormsComponent } from '../base/forms.component';
import { SwitchesComponent } from '../base/switches.component';
import { TablesComponent } from '../base/tables.component';
import { TabsComponent } from '../base/tabs.component';
import { CollapsesComponent } from '../base/collapses.component';
import { PaginationsComponent } from '../base/paginations.component';
import { PopoversComponent } from '../base/popovers.component';
import { ProgressComponent } from '../base/progress.component';
import { TooltipsComponent } from '../base/tooltips.component';
import { ModalsComponent } from '../notifications/modals.component';
import { ModalModule } from 'ngx-bootstrap/modal/';


const MODULES = [
  CommonModule,
  FormsModule,
  PeliculaRoutingModule,
  BsDropdownModule.forRoot(),
  TabsModule,
  CarouselModule.forRoot(),
  CollapseModule.forRoot(),
  PaginationModule.forRoot(),
  PopoverModule.forRoot(),
  ProgressbarModule.forRoot(),
  TooltipModule.forRoot(),
  ModalModule.forRoot()
];
const COMPONENTS = [
  EstrenoComponent, 
  ListarestrenoComponent,
  CarouselsComponent,
  CardsComponent,
  FormsComponent,
  SwitchesComponent,
  TablesComponent,
  TabsComponent,
  CarouselsComponent,
  CollapsesComponent,
  PaginationsComponent,
  PopoversComponent,
  ProgressComponent,
  TooltipsComponent,
  ModalsComponent,
];
@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
})
export class PeliculaModule { }
