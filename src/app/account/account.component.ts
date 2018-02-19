import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  fName = 'Paigunna';
  lName = 'Project';
  tel = '08-0000-8888';
  email = 'paigunnaproject@gmail.com';
  constructor() { }

  ngOnInit() {
  }

}
