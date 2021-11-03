import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expName: string = ""
  expAmt: string = ""
  expDate: string = ""

  getExpense() {
    console.log(this.expName, this.expAmt, this.expDate)
  }
}
