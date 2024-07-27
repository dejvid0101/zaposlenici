import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiResponse, Employee } from '../../models/employee.model';
import { Observer } from 'rxjs';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'zaposlenici';
  apiRt = 'https://api.test.ulaznice.hr/paganini/api/job-interview/employees';
  employees: Employee[] = [];
  isLoading = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    const employeeObserver: Observer<ApiResponse> = {
      next: (response) => {
        this.employees = response.data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching employee data:', error);
        this.isLoading = false;
      },
      complete: () => {
        console.log(this.employees);
      }
    };

    this.http.get<ApiResponse>(this.apiRt)
      .subscribe(employeeObserver);
  }
}
