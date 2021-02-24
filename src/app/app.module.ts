import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
},
  { path: 'first-component', component: LoginComponent },
  { path: 'second-component', component: ShoppingCartComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingCartComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
