import { Component, Inject, OnInit } from '@angular/core';
import Rat from '../../../domain/entities/rat.entity';
import IGetRatsUseCase from '../../../domain/usecases/get-rats-interface.usecase';
import GetRatsUseCase from '../../../domain/usecases/implementations/get-rats.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GetRatsUseCase]
})
export class HomePage implements OnInit {

  public rats: Rat[] = [];

  constructor(@Inject(GetRatsUseCase) private readonly getRatsUseCase: IGetRatsUseCase) {}
  
  async ngOnInit(): Promise<void> {
    this.getRatsUseCase.handle().then((result) => {
      if(!(result instanceof Error)) {
        this.rats = result;
      }
    })
  }
}