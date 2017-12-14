import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { PartnerService } from '../../services/partner.service';
import { Partner } from '../../models/partner';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'partner-list',
    template: `
        <div class="container" style="margin-top:50px;">
            <h4>Partners List</h4>

            <div style="margin-top:50px;">
                <div class="row" style="color: blue;">
                    <div class="col-xs-4 col-sm-4">
                        Name
                    </div>
                    <div class="col-xs-4 col-sm-4">
                        ID
                    </div>
                </div>

                <div *ngFor="let partner of partners"  class="container" class="row">
                    <partner-detail [partner1]="partner"></partner-detail>
                </div>
            </div>

            <button type="submit" class="btn btn-default" style="margin-top:50px;" (click)="goToInsert()">Create New Partner</button>

        </div>
    `
})
export class PartnerListComponent {
    partners: Partner[];

    constructor(private router: Router, private partnerService: PartnerService) { }

    goToInsert = function () {
        this.router.navigateByUrl('/partnerinsert');
    }

    ngOnInit() {
        this.partnerService.getPartners()
            .subscribe(
            data => {
                console.log('http succeeded.');
                console.log(data);
                this.partners = data;
                console.log(this.partners);
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('An error occurred:', err.error.message);
                } else {
                    console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
                }

                this.partners = this.partnerService.getStubPartners();
            }
        );
    }
}