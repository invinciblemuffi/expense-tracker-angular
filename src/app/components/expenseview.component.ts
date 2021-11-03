import { Component } from "@angular/core";

interface Expense {
    name: string;
    date: string;
    amt: number;
}

@Component({
    selector: 'expenseview-root',
    templateUrl: './expenseview.component.html',
    styleUrls: ['./expenseview.component.css']
})
export class ExpenseView {
    displayedColumns: string[] = ['expname', 'expdate', 'expamt']
    expenses: Expense[] = [
        { name: 'Beach ball', date: '12-10-2020', amt: 4 },
    ];

    /** Gets the total cost of all expenses. */
    getTotalCost() {
        return this.expenses.map(e => e.amt).reduce((acc, value) => acc + value, 0);
    }

}