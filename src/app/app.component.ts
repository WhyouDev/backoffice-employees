import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesComponent } from './employees/employees.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'backoffice-employees';

  constructor(private _dialog: MatDialog){}

  formEmployees(){
    this._dialog.open(EmployeesComponent)
  }
}
