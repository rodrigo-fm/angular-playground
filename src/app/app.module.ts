import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/rats/presentation/pages/home/home.component';
import GetRatsUseCase from './modules/rats/domain/usecases/implementations/get-rats.usecase';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GetRatsUseCase],
  bootstrap: [AppComponent]
})
export class AppModule { }
