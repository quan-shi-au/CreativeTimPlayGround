import { Component, Input } from '@angular/core'

@Component({
    selector: 'partner-detail',
    template: `
                    <div class="col-xs-4 col-sm-4">
                        {{partner1.name}}
                    </div>
                    <div class="col-xs-4 col-sm-4">
                        {{partner1.id}}
                    </div>
    `
})
export class PartnerDetailComponent {
    @Input() partner1: any
}