import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriosModule } from './repositorios/repositorios.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    RepositoriosModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
