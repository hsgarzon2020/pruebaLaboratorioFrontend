import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UI/home/home.component';
import { CreateComponent } from './UI/patients/create/create.component';
import { ListComponent } from './UI/patients/list/list.component';

const routes: Routes = [
    //route templates
    {path: 'home', component:HomeComponent},
    {path: 'create-patient', component: CreateComponent},
    {path: 'list-patient', component: ListComponent },

    //ruta por  defecto
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
