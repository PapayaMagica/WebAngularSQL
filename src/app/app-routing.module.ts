import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormulariocrearnotasComponent} from '../app/formulariocrearnotas/formulariocrearnotas.component';
import { VisualizarNotasComponent } from '../app/visualizar-notas/visualizar-notas.component';

const routes: Routes = [
  {path:'',component:FormulariocrearnotasComponent},
  {path:'visualizar-notas',component:VisualizarNotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
