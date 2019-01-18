import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Sales',
    'Marketing',
    'IT',
    'Facilities'
  ];

  userForm: FormGroup;
  validMessage: string = "";

  constructor(private userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      eFirstName: new FormControl('', Validators.required),
      eLastName: new FormControl('', Validators.required),
      eGender: new FormControl('', Validators.required),
      eDepartment: new FormControl('', Validators.required),
      edob: new FormControl('', Validators.required)
    });
  }

  submitRegistration()
  {
    if(this.userForm.valid)
    {
      this.validMessage = "Employee Details has been submitted. Thank You.";
      this.userService.createUser(this.userForm.value).subscribe(
        data => {
          this.userForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    }
    else
    {
      this.validMessage = "Please fill out all the fields!!";
    }
  }

  showAdmin(): void { 
      this._router.navigate(['/admin']); 
   } 

}

