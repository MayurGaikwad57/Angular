import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {
    flowers:string[] = ["Mogra","Jasmine","Rose"];
    userDetails = [
      {name:"Mayur",email:"gaikwad@chatgpt.com",phoneNumber : '999'},
      {name:"Amit",email:"patil@chatgpt.com",phoneNumber : '999'},
      {name:"Pushpak",email:"nagreare@chatgpt.com",phoneNumber : '999'},
      {name:"Elvish",email:"yadav@chatgpt.com",phoneNumber : '999'}
    ]

    refresh(){
     this. userDetails = [
        {name:"Mayur",email:"gaikwad@chatgpt.com",phoneNumber : '999'},
        {name:"Amit",email:"patil@chatgpt.com",phoneNumber : '999'},
        {name:"Elvish",email:"yadav@chatgpt.com",phoneNumber : '999'},
        {name:"John",email:"yadav@chatgpt.com",phoneNumber : '999'},
        {name:"Pushpak",email:"nagreare@chatgpt.com",phoneNumber : '999'}
      ]
    }
      refreshUser(index:any,userDetails:any){
        return userDetails.name;
      }
    colors = ["White","blue","Red"];
    createMenu:string[] = ["Home","About","Services","Contact"]

    // using ngFor TrackBy method for performance improvement
    list = [
      {name:"Mayur" , id:1},
      {name:"Elvish",id:2}
    ]

    display() {
      this.list = [
        {name:"Mayur" , id:1},
       {name:"Elvish",id:2},
       {name:"John",id:3},
       {name:"King",id:4}
      ]
    }
    addUser(index:any,user:any){
      return user.id;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
