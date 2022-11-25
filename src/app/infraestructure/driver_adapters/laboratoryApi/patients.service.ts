import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PatientGateway } from 'src/app/domain/models/gateways/PatientGateway';
import { CreatePatientRequest } from 'src/app/domain/models/request/CreatePatientRequest';
import { CreatePatientResponse } from 'src/app/domain/models/response/CreatePatientResponse';
import { Patient } from 'src/app/domain/models/response/Patient';
import { PatientByIdResponse } from 'src/app/domain/models/response/PatientByIdResponse';
import { ResponseBase } from 'src/app/domain/models/response/ResponseBase';

@Injectable({
  providedIn: 'root'
})
export class PatientsService extends PatientGateway{

  constructor(private http:HttpClient) {
    super();
  }

  createPatient(request: CreatePatientRequest): Promise<ResponseBase<CreatePatientResponse>> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' })
    return firstValueFrom(this.http.post<ResponseBase<CreatePatientResponse>>('patients', JSON.stringify(request), { headers: header }))
  }

  getAll(): Promise<ResponseBase<Array<Patient>>> {
    return firstValueFrom(this.http.get<ResponseBase<Array<Patient>>>('patients'));
  }
  getPatientById(patientId: string): Promise<PatientByIdResponse> {
    return firstValueFrom(this.http.get<PatientByIdResponse>('patients/' + patientId));
  }

}
