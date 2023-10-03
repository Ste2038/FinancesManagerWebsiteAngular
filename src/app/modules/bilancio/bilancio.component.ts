import { Component, OnInit } from '@angular/core';
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
  selector: 'app-bilancio',
  templateUrl: './bilancio.component.html',
  styleUrls: ['./bilancio.component.css']
})

export class BilancioComponent implements OnInit {  
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  
  constructor(private server: ServerService){
    this.chartOptions1 = {
      chart: {
        height: 200,
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
          show: true,
          autoSelected: "zoom"
        }
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },  
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      markers: { size: 0 },
      xaxis: {
        title: { text: "Mesi" },
        type: "datetime",
      },
      yaxis: {
        title: { text: "Soldi" },
        min: 0,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        floating: true,
        offsetY: -20,
        offsetX: 0
      },
      series: [],
    };

    this.chartOptions2 = {
      chart: this.chartOptions1.chart,
      grid: this.chartOptions1.grid,
      dataLabels: this.chartOptions1.dataLabels,
      stroke: this.chartOptions1.stroke,
      markers: this.chartOptions1.markers,
      xaxis: this.chartOptions1.xaxis,
      yaxis: { title: { text: "Soldi" } },
      legend: this.chartOptions1.legend,
      series: [],
    };
  }

  ngOnInit(): void {
    let component = this;
    component.server.getBilancioAnnuo(function(result: any){
      component.chartOptions1.series = [];
      console.log(result);
      for(let i = 0; i < result.length- 1; i++){
        component.chartOptions1.series.push({
          name: result[i].conto,
          data: result[i].data
        });
      }
      component.chartOptions2.series = [];

      component.chartOptions2.series.push({
        name: result[result.length- 1].conto,
        data: result[result.length- 1].data
      });
    });
  }
}
