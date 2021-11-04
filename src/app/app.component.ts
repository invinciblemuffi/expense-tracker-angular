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
  newExpObj: object = {}

  getExpense() {
    console.log(this.expName, this.expAmt, this.expDate)
    this.newExpObj = { name: this.expName, amt: this.expAmt, date: this.expDate }
    console.log(this.newExpObj)
  }
}
