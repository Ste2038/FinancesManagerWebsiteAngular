import { Component, OnInit } from "@angular/core";
import { ServerService } from '../../services/server.service';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-transazioni-uscite',
  templateUrl: './transazioni-uscite.component.html',
  styleUrls: ['./transazioni-uscite.component.css']
})

export class TransazioniUsciteComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  public prioritaText: number[] = [];
  public prioritaVal: boolean[] = [];

  constructor(private server: ServerService) {
    this.chartOptions = {
      chart: {
        type: "donut"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      labels: [],
      series: []
    };
  }

  ngOnInit(): void {
    let component = this;
    component.server.getPriorita(function(priorita:any){
      for(let key in priorita){
        if(priorita.hasOwnProperty(key)){
          component.prioritaText.push(priorita[key].priorita);
          component.prioritaVal.push(true);
        }
      }
      component.updateGraph(null, -1);
    });
  }

  updateGraph(event:any, index:number): void {
    let component = this;
    let priorita:number[] = [];

    if(index != -1 && event != null){
      component.prioritaVal[index] = event.checked;
    }

    for(let i = 0; i < component.prioritaVal.length; i++){
      if (component.prioritaVal[i]){
        priorita.push(component.prioritaText[i]);
      }
    }

    component.server.getTransazioni(priorita, function(transazioni:any){
      let labels:String[] = [], avg:number[] = [];

      for (let key in transazioni) {
        if (transazioni.hasOwnProperty(key)) {
          labels.push(transazioni[key].nome);
          let num:number = Math.round(transazioni[key].uscite * 100) / 100;
          avg.push(num);
        }
      }

      for(let i = 0; i < avg.length -1 ; i++){
        for(let j = i + 1; j < avg.length; j++){
          if(avg[i] > avg[j]){
            let tmp = avg[i];
            avg[i] = avg[j];
            avg[j] = tmp;

            let tmp2 = labels[i];
            labels[i] = labels[j];
            labels[j] = tmp2;
          }
        }
      }
      component.chartOptions.labels = labels;
      component.chartOptions.series = avg;
    });
  }
}
