import { Component } from '@angular/core';
import { Patient } from 'src/app/domain/models/response/Patient';
import { ResponseBase } from 'src/app/domain/models/response/ResponseBase';
import { GetPatientUseCase } from 'src/app/domain/use_cases/GetPatientUseCase';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public patientList: Array<Patient>

  constructor(private getPatientUseCase: GetPatientUseCase) {
    this.patientList = []
  }

  ngOnInit(): void {
    this.getAllPatients()
  }

  getAllPatients() {

    this.getPatientUseCase.getAll()
      .then((response: ResponseBase<Array<Patient>>) => {
        this.patientList = response.data
      }
      )
      .catch(Error => { })
  }

  goToPatientById(){
    
  }

}
