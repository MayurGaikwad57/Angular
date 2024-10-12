import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  User:any
  constructor(refer:UserDataService) {
    this.User=refer.user();
    console.log("UserData:",refer.user())
   }

  ngOnInit(): void {
  }

}
