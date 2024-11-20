import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Incluindo o AppComponent no NgModule
import { AppRoutingModulo } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],  // Declarar o AppComponent aqui
  imports: [BrowserModule, AppRoutingModulo],
  bootstrap: [AppComponent]  // Usar o AppComponent no bootstrap
})
export class AppModule { }
