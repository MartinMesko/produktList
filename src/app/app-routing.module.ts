import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {GeneratorComponent} from "./generator/generator.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: GeneratorComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: '**', redirectTo: 'profile', pathMatch: "full"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
