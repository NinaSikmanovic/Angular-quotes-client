import {Component} from '@angular/core';
import {Quote} from 'src/app/models/Quote';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})


export class QuotesListComponent {
  username: string = 'nikolina';
  quotes: Quote[] = [];
  displayedColumns: string[] = ['id', 'quoteText', 'quoteNarrator'];
  dataSource: Quote[] = [];

  ngOnInit(): void {
    this.quotes = [
      {id: 1, quoteText: 'FirstQuote', quoteNarrator: 'Narr1'},
      {id: 2, quoteText: 'SecondQuote', quoteNarrator: 'Narr2'}
    ];
    this.dataSource = this.quotes;
  }
}
