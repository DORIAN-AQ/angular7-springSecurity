import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class City {
  constructor(public name: string, public population: number) {}
}

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<City[]>('http://localhost:8080/cities');
  }
}