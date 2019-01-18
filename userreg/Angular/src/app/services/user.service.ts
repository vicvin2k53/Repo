import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers()
  {
    return this.http.get('http://165.79.20.144:8080/userreg');
  }

  createUser(user)
  {
    let body = JSON.stringify(user);
    return this.http.post('http://165.79.20.144:8080/userreg', body, httpOptions);
  }

}
