import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http: HttpClient) { }

  getAllProduits(): Observable<any> {
    return this.http.get("http://localhost:8080/produits");
  }
  getAllMagasins(): Observable<any> {
    return this.http.get("http://localhost:8080/magasins");
  }

  addProduit(produit:any): Observable<any> {
    return this.http.post("http://localhost:8080/addProduit",produit);
  }

  delete(id:number): Observable<any> {
    return this.http.delete("http://localhost:8080/deleteProduit/"+id);
  }


  allProduitsByMagasin(id:number): Observable<any> {
    return this.http.get("http://localhost:8080/magasinProduits/"+ id);
  }

}

