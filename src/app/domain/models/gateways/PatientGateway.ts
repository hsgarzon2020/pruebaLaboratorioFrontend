import { CreatePatientRequest } from "../request/CreatePatientRequest";
import { CreatePatientResponse } from "../response/CreatePatientResponse";
import { Patient } from "../response/Patient";
import { PatientByIdResponse } from "../response/PatientByIdResponse";
import { ResponseBase } from "../response/ResponseBase";


export abstract class PatientGateway{
    abstract createPatient(request : CreatePatientRequest): Promise<ResponseBase<CreatePatientResponse>>
    abstract getAll():Promise<ResponseBase<Array<Patient>>>
    abstract getPatientById(patientId:string):Promise<PatientByIdResponse>
}