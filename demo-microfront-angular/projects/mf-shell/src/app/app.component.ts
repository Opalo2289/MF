import { Component } from '@angular/core';
import { CommonsLibService } from '@commons-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(public commonsLibService: CommonsLibService){ }
}
