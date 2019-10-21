import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { routerModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalService, BsModalRef, ComponentLoaderFactory, PositioningService } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,routerModule,HttpClientModule,ModalModule,ReactiveFormsModule
  ],
  providers: [BsModalService,BsModalRef,ButtonsModule ,  ComponentLoaderFactory,PositioningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
