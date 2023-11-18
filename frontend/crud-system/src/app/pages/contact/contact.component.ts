import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name: string;
  email: string;
  message: string;

  constructor() {
    this.name= "";
    this.email= "";
    this.message= "";
  }

  sendForm():void {
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
  }

}
