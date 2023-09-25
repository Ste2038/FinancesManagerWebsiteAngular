import { Component, OnInit } from "@angular/core";
import { ServerService } from '../../services/server.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexResponsive,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-spese-categorie',
  templateUrl: './spese-categorie.component.html',
  styleUrls: ['./spese-categorie.component.css']
})

export class SpeseCategorieComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  public parents: any[] = [];

  constructor(private server: ServerService) {
    this.chartOptions = {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false,
        }
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },  
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Set",
          "Oct",
          "Nov",
          "Dec"
        ],
        title: {
          text: "Mesi"
        }
      },
      yaxis: {
        title: {
          text: "Soldi"
        },
        min: 0,
        //max: 1000
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -10,
        offsetX: -5
      },
      series: [],
    };
  }

  ngOnInit(): void {
    let component = this;
    this.server.getCategorieUscitaParent(function(parents: any){
      component.parents = parents;
      component.updateGraph(-1);
    });

    
  }

  updateGraph(parent: number){
    let component = this;
    component.server.getSpeseCategorie(parent, function(spese:any){
      component.chartOptions.series = [];
      for(let key in spese){
        let valid = false;
        for(let i = 0; i < spese[key].mesi.length; i++){
          if(spese[key].mesi[i] > 0)
            valid = true;
        }
        //console.log(spese[key].mesi);
        if (valid)
          component.chartOptions.series.push({name: spese[key].nome, data: spese[key].mesi});
      }
      console.log(component.chartOptions.series);
    });
  }
}
