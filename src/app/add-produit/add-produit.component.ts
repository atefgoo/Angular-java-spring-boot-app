import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

    produit: any = {
      id: 0,
      description: '',
      prixAchat: '',
      prixVente: '',
      stock: '',
    };
    constructor(private gestion: GestionService, private route: Router) {}
  ngOnInit(): void {
  }
  add() {
    this.gestion.addProduit(this.produit).subscribe({
      next: (data: any) => {
        this.route.navigate(['/produits']);
      },
      error: (error: any) => {},
    });}
}
