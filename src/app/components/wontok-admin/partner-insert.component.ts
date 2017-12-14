import { Component} from '@angular/core'
import { Router } from '@angular/router';

import { PartnerService } from '../../services/partner.service';
import { Partner } from '../../models/partner';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
    selector: 'partner-insert',
    template: `
        <div class="container">
            <h4>Partners List</h4>
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="partner-id">ID:</label>
                    <input #inputPartnerId type="text" class="form-control" id="partner-id" [(ngModel)]="partnerId">
                </div>
                <div class="form-group">
                    <label for="partner-name">Partner name:</label>
                    <input #inputPartnerName type="text" class="form-control" id="partner-name" [(ngModel)]="partnerName">
                </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <input type="text" class="form-control" id="address">
                </div>
                <button type="submit" class="btn btn-default" (click)="insert(inputPartnerId.value, inputPartnerName.value)">Save</button>
            </form>
        </div>
    `
})
export class PartnerInsertComponent {
    partnerName: string = '';
    partnerId: number = 0;

    partner: Partner = new Partner();

    constructor(private router: Router, private partnerService: PartnerService) { }

    insert(partnerId:number, partnerName: string) {

        this.partner.id = partnerId;
        this.partner.address = 'test';
        this.partner.name = partnerName;

        this.partnerService.insertPartner(this.partner)
            .subscribe(
            data => {
                console.log('insertPartner succeeded.');
                console.log(data);

                this.router.navigateByUrl('/partnerlist');
            },
            (err: HttpErrorResponse) => {

                this.partnerService.insertStubPartner(this.partner);
                this.router.navigateByUrl('/partnerlist');

                if (err.error instanceof Error) {
                    console.log('insertPartner error occurred:', err.error.message);
                } else {
                    console.log(`insertPartner Backend returned code ${err.status}, body was: ${err.error}`);
                }
            }
        )
            ;

    }
}