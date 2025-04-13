import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadVacancies();
  }

  loadVacancies(): void {
    this.companyService.getCompanyVacancies(this.companyId).subscribe(
      data => this.vacancies = data,
      error => console.error('Error loading vacancies', error)
    );
  }
}