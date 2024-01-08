import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { InformationsComponent } from './informations/informations.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {FormsModule} from "@angular/forms";
import { AppFilterComponent } from './app-filter/app-filter.component';
import { AppFilterOptionsComponent } from './app-filter-options/app-filter-options.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from "@angular/material/card";
import { SalesStatisticsComponent } from './sales-statistics/sales-statistics.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    InformationsComponent,
    ReviewsComponent,
    AppFilterComponent,
    AppFilterOptionsComponent,
    ProductDetailComponent,
    ProfilePageComponent,
    MainMenuComponent,
    SalesStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
