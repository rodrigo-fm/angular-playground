import { Component, Inject } from '@angular/core';
import Rat from '../../../domain/entities/rat.entity';
import IGetRatsUseCase from '../../../domain/usecases/get-rats-interface.usecase';
import GetRatsUseCase from '../../../domain/usecases/implementations/get-rats.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GetRatsUseCase]
})
export class HomePage {

  private rats?: Rat[];

  constructor(@Inject(GetRatsUseCase) private readonly getRatsUseCase: IGetRatsUseCase) {}

  // getRats = async () => {
  //   const rats: Rat[] | Error = await this.getRatsUseCase.handle();
  //   if(rats instanceof Error) {}
  //   else {
  //     this.rats = rats;
  //   }
  // }
}
