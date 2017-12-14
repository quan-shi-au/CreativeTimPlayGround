import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import {PartnerInsertComponent} from './components/wontok-admin/partner-insert.component';
import {PartnerListComponent} from './components/wontok-admin/partner-list.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/partnerlist', pathMatch: 'full' },
    { path: 'partnerlist', component: PartnerListComponent },
    { path: 'partnerinsert', component: PartnerInsertComponent }
];
