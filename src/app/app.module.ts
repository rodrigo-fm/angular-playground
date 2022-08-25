import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RatsModule } from './modules/rats/rats.module';
import { RouterModule } from '@angular/router';
import { routes } from './shared/main/routes';
import { HomePage } from './modules/rats/presentation/pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [
    // Angular modules
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    // Project Modules
    RatsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
