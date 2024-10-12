import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }
  Submitted = false;

  User = {
    name: '',
    email: ''
  };
  Onsubmit() {
    this.Submitted = true;
  }
  Students = ['Mayur', 'Gaurav', 'Anil', 'Amit']

  studentDetails = [{
    name: "Mayur",
    email: "gmayur100k@gmailcom",
    number: '999'
  }, {
    name: "Amit",
    email: "gmayur100k@gmailcom",
    number: '999'
  },
  {
    name: "Gaurav",
    email: "gmayur100k@gmailcom",
    number: '999'
  },
  {
    name: "Anil",
    email: "gmayur100k@gmailcom",
    number: '999'
  },
  ]
  done = false;
  onSubmit() {
     this.done=true;
  }

  ngOnInit(): void {
  }

}
