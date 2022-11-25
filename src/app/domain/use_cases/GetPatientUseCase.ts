import { Injectable } from "@angular/core"
import { PatientGateway } from "../models/gateways/PatientGateway"

@Injectable({
    providedIn: 'root'
})

export class GetPatientUseCase {
    constructor(private patientGateway: PatientGateway) {
    }

    getAll() {
        return this.patientGateway.getAll()
    }

    getCardByID(patientId: string) {
        return this.patientGateway.getPatientById(patientId)
    }
}