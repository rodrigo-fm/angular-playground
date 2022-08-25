import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatsModule } from './modules/rats/rats.module';
import { RouterModule } from '@angular/router';
import { routes } from './shared/main/routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    // Project Modules
    RatsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
