import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(public status:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<User>('http://localhost:8080/validateLogin',{ headers }).pipe(
      map(userData => {
        sessionStorage.setItem('username', username);
        let authString = 'Basic ' + btoa(username + ':' + password);
        sessionStorage.setItem('basicauth', authString);
        return userData;
      }));
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}