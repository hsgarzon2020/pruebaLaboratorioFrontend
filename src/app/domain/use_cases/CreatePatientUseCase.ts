import { Injectable } from "@angular/core";
import { PatientGateway } from "../models/gateways/PatientGateway";
import { CreatePatientRequest } from "../models/request/CreatePatientRequest";

@Injectable({
    providedIn: 'root'
})

export class createPatientUseCase{
    constructor(private patientGateway: PatientGateway){
    }

    createPatient(createPatientRequest:CreatePatientRequest){
        return this.patientGateway.createPatient(createPatientRequest)
    }

}