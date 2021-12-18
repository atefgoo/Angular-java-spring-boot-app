import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-liste-magasin',
  templateUrl: './liste-magasin.component.html',
  styleUrls: ['./liste-magasin.component.scss']
})
export class ListeMagasinsComponent implements OnInit {

  magasins:any=[]

  constructor(private gestion:GestionService) { 
    this.getMagasins();
  }

  ngOnInit(): void {
  }

  getMagasins(){
    this.gestion.getAllMagasins().subscribe(
      {
        next:(data:any)=>{this.magasins=data;},
        error:(error:any)=>{},
      }
    )
  }

}