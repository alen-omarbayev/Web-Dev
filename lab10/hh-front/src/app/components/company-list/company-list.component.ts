import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, VacancyListComponent],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(
      data => this.companies = data,
      error => console.error('Error loading companies', error)
    );
  }

  selectCompany(companyId: number): void {
    this.selectedCompanyId = companyId;
  }
}