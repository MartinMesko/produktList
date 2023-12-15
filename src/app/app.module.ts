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

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    InformationsComponent,
    ReviewsComponent,
    AppFilterComponent,
    AppFilterOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
