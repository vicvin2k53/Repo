import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

public users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers()
  {
    this.userService.getUsers().subscribe(
    data => {this.users = data, console.log(data)},
    err => {console.error(err)},
    () => console.log('users loaded')
                                          );
  }
 }


