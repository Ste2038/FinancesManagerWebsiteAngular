import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, callback: Function, data?: any) {
    const headers = { 'Content-Type': 'application/json'};

    if(method == "GET"){
      this.http.get(url, data)
        .subscribe(res => {
          callback(res);
      });
    }
    else if(method == "POST" && data){
      this.http.post<any>(url, data, {headers})
        .subscribe(res => {
          callback(res);
      });
    }
  }

  selectAllCategorie(callback: Function) {
    this.request('GET', `http://localhost:8080/selectAll/categorie`, callback);
  }

  selectAllConti(callback: Function) {
    this.request('GET', `http://localhost:8080/selectAll/conti`, callback);
  }

  selectAllCurrency(callback: Function) {
    this.request('GET', `http://localhost:8080/selectAll/currency`, callback);
  }

  selectAllGruppiConto(callback: Function) {
    this.request('GET', `http://localhost:8080/selectAll/gruppiconto`, callback);
  }

  selectAllRicorrenti(callback: Function) {
    this.request('GET', `http://localhost:8080/selectAll/ricorrenti`, callback);
  }

  selectAllTransazioni(callback: Function) {
    this.request('GET', `http://localhost:8080/selectAll/transazioni`, callback);
  }

  selectAllUtenti(callback: Function) {
    this.request('GET', `http://localhost:8080/selectAll/utenti`, callback);
  }

  getTransazioni(priorita: number[], callback: Function) {
    let data = {
      "queryResult":{
        "azione": "getTransazioni",
        "priorita": priorita,
        "dataFrom": "2023-03-01",
        "dataTo": "2023-04-01"
      }
    };

    this.request('POST', `http://localhost:8080/transazioni`, callback, data);
  }

  getPriorita(callback: Function){
    this.request('GET', `http://localhost:8080/priorita`, callback);
  }
  
  getBilancio(callback: Function){
    this.request('GET', `http://localhost:8080/bilancio`, callback);
  }

  getSpeseCategorie(parent:number , callback: Function){
    this.request('GET', `http://localhost:8080/categoriemensili?parent=`+parent, callback);
  }

  getCategorieUscitaParent(callback: Function){
    this.request('GET', `http://localhost:8080/categorieuscitaparent`, callback);
  }

  getBilancioAnnuo(callback: Function){
    this.request('GET', `http://localhost:8080/bilancio/futuro`, callback);
  }
}
