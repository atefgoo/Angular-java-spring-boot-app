import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitsComponent implements OnInit {
  produits: any = [];

  constructor(private gestion: GestionService, private router: Router) {
    this.getProduits();
  }

  ngOnInit(): void {}

  getProduits() {
    this.gestion.getAllProduits().subscribe({
      next: (data: any) => {
        this.produits = data;
      },
      error: (error: any) => {},
    });
  }

  delete(id: any) {
    this.gestion.delete(id).subscribe({
      next: (data: any) => {
        this.getProduits();
      },
      error: (error: any) => {},
      complete: () => {},
    });
  }
}
