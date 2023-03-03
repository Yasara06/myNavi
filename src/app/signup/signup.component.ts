import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  show=true;
  // hidden=true;

   toggleShow(){
    this.show=!this.show;
    // this.hidden=false;
   }
  
}
