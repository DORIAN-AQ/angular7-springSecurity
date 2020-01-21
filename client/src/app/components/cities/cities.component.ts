import { Component, OnInit } from '@angular/core';

import { CitiesService, City } from '../../shared';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: City[] = [];

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.citiesService.getAll().subscribe((data: City[]) => this.cities = data);
  }

}
