import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators'
import { Observable } from "rxjs";
interface Expense {
    name: string;
    date: string;
    amt: string;
}

interface ServerResp {
    code: number;
    message: string;
    expDataLength: number;
    expData: Expense[]
}
@Component({
    selector: 'expenseview-root',
    templateUrl: './expenseview.component.html',
    styleUrls: ['./expenseview.component.css']
})

export class ExpenseView implements OnChanges, OnInit {
    constructor(private http: HttpClient) { }
    displayedColumns: string[] = ['expname', 'expdate', 'expamt']
    @Input() newExpObj: object = {}
    expenses: Expense[] = []
    private resp: ServerResp[] = []
    private baseUrl: string = 'http://expense-tracker-mongo-express.herokuapp.com/'

    ngOnChanges(changes: SimpleChanges) {
        this.expenses = [...this.expenses, this.newExpObj as Expense]
        console.log(this.expenses)
    }

    fetchExpenses(): Observable<ServerResp[]> {
        return this.http.get<ServerResp[]>(this.baseUrl)
    }

    ngOnInit() {
        this.fetchExpenses().subscribe(res => { console.log(res); this.resp = res }, err => err)
        console.log(this.resp)
    }

    /** Gets the total cost of all expenses. */
    getTotalCost() {
        return this.expenses.map(e => Number(e.amt)).reduce((acc, value) => acc + value, 0);
    }
}