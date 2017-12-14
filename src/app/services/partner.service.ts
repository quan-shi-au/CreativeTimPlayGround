import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Partner } from '../models/partner';

@Injectable()
export class PartnerService {

    constructor(private http: HttpClient) { }

    getPartners() {
        return this.http.get<Partner[]>('/WebApiTest1/api/partners');
    }

    getStubPartners() {
        return Partners;
    }

    getPartner(id: number) {
        return Partners.filter(x => x.id == 1);
    }

    insertPartner(partner: Partner) {
        return this.http.post('/WebApiTest1/api/partners', partner);
    }

    insertStubPartner(partner: Partner) {
        Partners.push(partner);
    }

}

var Partners : Partner[] = [
    { "id": 1, "name": "Partner NZ Co.", "address": "", "phoneNumber" : "" },
    { "id": 2, "name": "Partner Australia Co.", "address": "", "phoneNumber": "" },
    { "id": 3, "name": "Partner Japan Co.", "address": "", "phoneNumber": "" }
];


