import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from '../modules/material.module';

import { LayoutComponent } from './layout/layout.component';
import { LayoutService } from './layout/layout.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidenavComponent, HomeComponent, WellcomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule,
  ],
  providers: [LayoutService]
})
export class CoreModule { }
