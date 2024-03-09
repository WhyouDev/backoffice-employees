import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

interface Gr {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  empComp: FormGroup

  groups: Gr[] = [
    {value: 'gr-0', viewValue: 'Teller'},
    {value: 'gr-1', viewValue: 'Customer Service'},
    {value: 'gr-2', viewValue: 'Back Office'},
    {value: 'gr-3', viewValue: 'Account Officer'},
    {value: 'gr-4', viewValue: 'Sales Officer'},
    {value: 'gr-5', viewValue: 'Staf Administration'},
    {value: 'gr-6', viewValue: 'Credit Analyst'},
    {value: 'gr-7', viewValue: 'Investment Banker'},
    {value: 'gr-8', viewValue: 'Management'},
    {value: 'gr-9', viewValue: 'Head Branch'},
    {value: 'gr-10', viewValue: 'Information Technology'},
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: DialogRef<EmployeesComponent>
  )
  {
    this.empComp = this._fb.group({
      userName: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      birthDate: ['',Validators.required],
      basicSalary: ['',Validators.required],
      status: ['',Validators.required],
      group: ['',Validators.required],
      description: ['',Validators.required],
    })
  }

  onFormSubmit(){
    if(this.empComp.valid) {
      this._empService.addEmployee(this.empComp.value)
      .subscribe({
        next: (val: any) => {
          alert('Employee added sucessfully')
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.log(err)
        }
      })
    }
  }

}
