import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatePatientRequest } from 'src/app/domain/models/request/CreatePatientRequest';
import { createPatientUseCase } from 'src/app/domain/use_cases/CreatePatientUseCase';
import { GeneralService } from 'src/app/infraestructure/helpers/general.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{

  createPatientForm = new FormGroup({ 
    id: new FormControl('', Validators.required), 
    sugar: new FormControl('', Validators.compose([Validators.required,Validators.min(1),Validators.maxLength(100)])), 
    fat: new FormControl('', Validators.compose([Validators.required,Validators.min(1),Validators.maxLength(100)])),
    oxygen: new FormControl('', Validators.compose([Validators.required,Validators.min(1),Validators.maxLength(100)]))
  });

  constructor(private createPatientUseCase: createPatientUseCase,
    private general:GeneralService) {
  }

  ngOnInit(): void {
  }

  createPatient(request:CreatePatientRequest) {
    
    this.createPatientUseCase.createPatient(request)
      .then(
      )
      .catch(Error => { })
      
     console.log(this.createPatientForm.value)
  }

  toListPatients(){
    this.general.goTo("list-patient")
  }

}
