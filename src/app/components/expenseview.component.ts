import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
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
    @Input() newExpObj: object = {}
    expenses: Expense[] = []

    ngOnChanges(changes: SimpleChanges) {
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