import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ListeMagasinsComponent } from './liste-magasin/liste-magasin.component';
import { ListeProduitsComponent } from './liste-produit/liste-produit.component';

const routes: Routes = [
  {path: '', component:ListeMagasinsComponent},
  {path: 'magasins', component:ListeMagasinsComponent},
  {path: 'produits', component:ListeProduitsComponent},
  {path: 'add', component:AddProduitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
