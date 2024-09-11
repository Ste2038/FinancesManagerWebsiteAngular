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
  ApexPlotOptions,
  ApexLegend,
  ApexResponsive,
  ApexFill,
  ApexTooltip,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-savings-mese',
  templateUrl: './savings-mese.component.html',
  styleUrls: ['./savings-mese.component.css']
})
export class SavingsMeseComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;

  constructor(private server: ServerService) {
    this.chartOptions = {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          //endingShape: "rounded",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
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
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "" + val;// "$ " + val + " thousands";
          }
        }
      },
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
    };
  }

  ngOnInit(): void {
    let component = this;
    component.server.getSavingsMese(function(result: any){
      let entrate = [];
      let uscite = [];
      let totale = [];
      component.chartOptions.series = [];

      for(let i = 0; i < result.length; i++){
        entrate[result[i].mese - 1] = Math.round(result[i].entrata * 100) / 100;
        uscite[result[i].mese - 1] = Math.round(result[i].uscita * 100) / 100;
        totale[result[i].mese - 1] = Math.round(result[i].totale * 100) / 100;
      }

      component.chartOptions.series.push({name: "Entrate", data: entrate});
      component.chartOptions.series.push({name: "Uscite", data: uscite});
      component.chartOptions.series.push({name: "Totale", data: totale});
    });
  }
}
