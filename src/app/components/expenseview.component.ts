import { AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder } from "@angular/forms";
interface Expense {
    name: string;
    date: string;
    amt: string;
}
@Component({
    selector: 'expenseview-root',
    templateUrl: './expenseview.component.html',
    styleUrls: ['./expenseview.component.css']
})
export class ExpenseView implements OnChanges, OnInit {
    @Input() expName: string = ""
    @Input() expAmt: string = ""
    @Input() expDate: string = ""
    @Input() newExpObj: object = {}
    expenses: Expense[] = []

    /* @Input()
    get expName(): string { return this._expName }
    set expName(expName: string) { this._expName = expName }
    private _expName = "" */

    // ExpData: Expense[] = [{ name: this._expName, date: this.expDate, amt: this.expAmt }]

    ngOnChanges(changes: SimpleChanges) {
        /* for (const propName in changes) {
            if (Object.prototype.hasOwnProperty.call(changes, propName)) {
                const change = changes[propName];
                const currVal = JSON.stringify(change.currentValue)
                const prevVal = JSON.stringify(change.previousValue)
                console.log(`${propName}: currentValue = ${currVal}, previousValue = ${prevVal}`)
            }
        } 
        console.log(changes.expName.currentValue)
        /* this.expName = changes.expName.currentValue
        this.expAmt = changes.expAmt.currentValue
        this.expDate = changes.expDate.currentValue
        console.log(this.ExpData) */
        // this.updateExpenseList()
        this.expenses = [...this.expenses, this.newExpObj as Expense]
        console.log(this.expenses)
    }

    displayedColumns: string[] = ['expname', 'expdate', 'expamt']
    ngOnInit() {
        this.expenses = [
            { name: 'Beach ball', date: '12-10-2020', amt: '4' },
        ];
    }

    /** Gets the total cost of all expenses. */
    getTotalCost() {
        return this.expenses.map(e => Number(e.amt)).reduce((acc, value) => acc + value, 0);
    }

}