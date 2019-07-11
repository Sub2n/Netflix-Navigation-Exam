import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeHeader: boolean;

  navBg() {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 0) {
      this.activeHeader = true;
    } else {
      this.activeHeader = false;
    }
  }

}
