import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {RouterModule} from "@angular/router";
import {SearchComponent} from "./search/search.component";
import {OrderComponent} from "./order/order.component";
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { SaleComponent } from './sale/sale.component';
import {NgChartsConfiguration, NgChartsModule} from "ng2-charts";
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OrderComponent,
    UiHeaderComponent,
    SaleComponent,
    BarChartComponent,
    LineChartComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    NgChartsModule,
    RouterModule.forRoot([

      {
        path: 'order',
        component: OrderComponent
      } ,

      {
        path: 'inventory',
        component: SearchComponent
      } ,

      {
        path: 'sales',
        component: SaleComponent
      } ,
      {
        path: 'invoice',
        component: InvoiceComponent
      } ,
      { path: '',   redirectTo: '/inventory', pathMatch: 'full' }, // redirect to `first-component`
    ]),
    RouterModule.forChild([

      {
        path: 'order',
        component: OrderComponent
      } ,

      {
        path: 'search',
        component: SearchComponent
      } ,
      {
        path: 'sales',
        component: SaleComponent
      } ,
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      { path: '',   redirectTo: '/inventory', pathMatch: 'full' }, // redirect to `first-component`
    ])

  ],

  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
