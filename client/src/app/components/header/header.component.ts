import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:AuthenticationService) { }

  ngOnInit() {
  }

}
