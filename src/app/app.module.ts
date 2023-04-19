import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MessagesModule } from 'primeng/messages';
import {ChartModule} from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { PChartComponent } from './p-chart/p-chart.component';
import { PTableComponent } from './p-table/p-table.component';
import { LineChartComponent } from './line-chart/line-chart.component'


@NgModule({
  declarations: [
    AppComponent,
    PChartComponent,
    PTableComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    MessagesModule,
    ChartModule,
    TableModule
    // RippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
