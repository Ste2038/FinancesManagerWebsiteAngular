
/* Angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Material */
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

/* ApexCharts */
import { NgApexchartsModule } from "ng-apexcharts";

/* My Components */
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransazioniUsciteComponent } from './modules/transazioni-uscite/transazioni-uscite.component';
import { BilancioComponent } from './modules/bilancio/bilancio.component';
import { SpeseCategorieComponent } from './modules/spese-categorie/spese-categorie.component';

/* My Database Components */
import { DatabaseDashboardComponent } from './database/database-dashboard/database-dashboard.component';
import { ViewCategorieTableComponent } from './database/view-categorie-table/view-categorie-table.component';
import { ViewContiTableComponent } from './database/view-conti-table/view-conti-table.component';
import { ViewCurrencyTableComponent } from './database/view-currency-table/view-currency-table.component';
import { ViewGruppiContoTableComponent } from './database/view-gruppiconto-table/view-gruppiconto-table.component';
import { ViewRicorrentiTableComponent } from './database/view-ricorrenti-table/view-ricorrenti-table.component';
import { ViewTransazioniTableComponent } from './database/view-transazioni-table/view-transazioni-table.component';
import { ViewUtentiTableComponent } from './database/view-utenti-table/view-utenti-table.component';

/* Misc */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    TransazioniUsciteComponent,
    BilancioComponent,
    SpeseCategorieComponent,
    DashboardComponent,

    /* My Database Components */
    DatabaseDashboardComponent,
    ViewCategorieTableComponent,
    ViewContiTableComponent,
    ViewCurrencyTableComponent,
    ViewGruppiContoTableComponent,
    ViewRicorrentiTableComponent,
    ViewTransazioniTableComponent,
    ViewUtentiTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    /* Angular Material */
    MatCommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
    RouterModule.forRoot([
      {path: '', component: DashboardComponent},
      {path: 'db', component: DatabaseDashboardComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
