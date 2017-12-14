import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent }   from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';


import { AppRoutes } from './app.routing';
import {PartnerListComponent} from './components/wontok-admin/partner-list.component';
import {PartnerDetailComponent} from './components/wontok-admin/partner-detail.component';
import {PartnerInsertComponent} from './components/wontok-admin/partner-insert.component';
import { PartnerService } from './services/partner.service';


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        HttpClientModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        PartnerListComponent,
        PartnerDetailComponent,
        PartnerInsertComponent
    ],
    providers: [PartnerService],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
