import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNavi';

  show=true;
  // hidden=true;

   toggleShow(){
    this.show=!this.show;
    // this.hidden=false;
   }

}
