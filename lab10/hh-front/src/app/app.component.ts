import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CompanyListComponent
  ],
  template: `
    <div class="app-container">
      <h1>Job Board</h1>
      <app-company-list></app-company-list>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class AppComponent {}