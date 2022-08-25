import { NgModule } from '@angular/core';
import HttpAngularClient from './data/httpClient/implementations/http-angular-client';
import RatsRedditRepository from './data/repositories/implementations/rats-reddit.repository';
import GetRatsUseCase from './domain/usecases/implementations/get-rats.usecase';
import { HomePage } from './presentation/pages/home/home.component';

const components: any[] = [HomePage];

@NgModule({
  declarations: components,
  imports: [],
  // Why exports? https://stackoverflow.com/questions/39601784/use-component-from-another-module
  exports: [...components],
  providers: [
    GetRatsUseCase,
    RatsRedditRepository,
    HttpAngularClient,
  ],
  bootstrap: []
})
export class RatsModule { }
