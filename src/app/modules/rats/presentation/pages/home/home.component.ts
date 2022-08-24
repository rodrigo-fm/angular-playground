import { Component } from '@angular/core';
import Rat from '../../../domain/entities/rat.entity';
import GetRatsUseCase from '../../../domain/usecases/implementations/get-rats.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GetRatsUseCase]
})
export class HomeComponent {

  private rats?: Rat[];

  constructor(private readonly getRatsUseCase: GetRatsUseCase) {}

  getRats = async () => {
    const rats: Rat[] | Error = await this.getRatsUseCase.handle();
    if(rats instanceof Error) {}
    else {
      this.rats = rats;
    }
  }
}
