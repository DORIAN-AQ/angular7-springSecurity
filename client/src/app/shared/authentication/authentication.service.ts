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
    const body = {
      username,
      password
    };

    return this.http.post<any>('http://localhost:8080/authenticate', body)
      .pipe(map(userData => {
        sessionStorage.setItem('username',username);
        sessionStorage.setItem('token', `Bearer ${userData.token}`);
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