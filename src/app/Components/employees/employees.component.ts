import { Component, OnInit } from '@angular/core';
import { EmplyeesServiceService } from '../../Services/emplyees-service.service';
import { EmployeeInterface } from 'src/app/interfaces/IEmployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
employees:EmployeeInterface[]=[];

  constructor(private empserv:EmplyeesServiceService){

  }
  ngOnInit(): void {

    this.empserv.getallEmplyees(2007).subscribe(employes=>{
    this.employees=employes;
    //console.log(this.employees);
    })
  }



}
