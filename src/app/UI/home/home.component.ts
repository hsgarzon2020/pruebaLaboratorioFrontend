import { Component } from '@angular/core';
import { GeneralService } from 'src/app/infraestructure/helpers/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(private general:GeneralService){
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toCreatePatient(){
    this.general.goTo("create-patient")
  }


}

