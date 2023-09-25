import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { Bilancio } from 'src/app/classes/bilancio';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  bilancio: Bilancio[] = [{"idConto":-1,"conto":"Totale","gruppoConto":"","valore":0.00}] as Bilancio[];
  
  constructor(private server: ServerService){}
  
  ngOnInit(): void {
    let component = this;
    component.server.getBilancio(function(bilancio:Bilancio[]){
      component.bilancio = bilancio;
    });
  }
}