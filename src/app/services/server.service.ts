import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url: string  = "http://192.168.88.100:8080";

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
    this.request('GET', this.url + `/selectAll/categorie`, callback);
  }

  selectAllConti(callback: Function) {
    this.request('GET', this.url + `/selectAll/conti`, callback);
  }

  selectAllCurrency(callback: Function) {
    this.request('GET', this.url + `/selectAll/currency`, callback);
  }

  selectAllGruppiConto(callback: Function) {
    this.request('GET', this.url + `/selectAll/gruppiconto`, callback);
  }

  selectAllRicorrenti(callback: Function) {
    this.request('GET', this.url + `/selectAll/ricorrenti`, callback);
  }

  selectAllTransazioni(callback: Function) {
    this.request('GET', this.url + `/selectAll/transazioni`, callback);
  }

  selectAllUtenti(callback: Function) {
    this.request('GET', this.url + `/selectAll/utenti`, callback);
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

    this.request('POST', this.url + `/transazioni`, callback, data);
  }

  getPriorita(callback: Function){
    this.request('GET', this.url + `/priorita`, callback);
  }
  
  getBilancio(callback: Function){
    this.request('GET', this.url + `/bilancio`, callback);
  }

  getSpeseCategorie(parent:number , callback: Function){
    this.request('GET', this.url + `/categoriemensili?parent=`+parent, callback);
  }

  getCategorieUscitaParent(callback: Function){
    this.request('GET', this.url + `/categorieuscitaparent`, callback);
  }

  getBilancioAnnuo(callback: Function){
    this.request('GET', this.url + `/bilancio/futuro`, callback);
  }
}
