import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from '../company-list/company-list.component';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';


@NgModule({
  declarations: [
    CompanyListComponent,
    VacancyListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompanyListComponent,
    VacancyListComponent
  ]
})
export class SharedModule { }
