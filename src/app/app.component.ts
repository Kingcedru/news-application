import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'News-Application';

  goToPreviousPage(){
    window.history.back()
  }
}
