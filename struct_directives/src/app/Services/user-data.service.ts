import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
 user() {
  return [
    {name:"Mayur",email:"gaikwad@chatgpt.com"},
    {name:"Amit",email:"Patil@chatgpt.com"},
    {name:"Gaurav",email:"jha@chatgpt.com"}
  ]
 }
}
