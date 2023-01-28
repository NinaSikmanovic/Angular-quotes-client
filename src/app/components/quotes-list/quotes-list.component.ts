import {Component} from '@angular/core';
import {Quote} from 'src/app/models/Quote';
import {QuoteService} from "../../services/quote.service";

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})


export class QuotesListComponent {
  // username: string = 'nikolina';
  quotes: Quote[] = [];
  displayedColumns: string[] = ['id', 'quoteText', 'quoteNarrator'];
  dataSource: Quote[] = [];


  constructor(private QuoteService: QuoteService) {
  }

  ngOnInit(): void {
  //   // this.quotes = [
  //   //   {id: 1, quoteText: 'FirstQuote', quoteNarrator: 'Narr1'},
  //   //   {id: 2, quoteText: 'SecondQuote', quoteNarrator: 'Narr2'}
  //   // ];
  //
    this.QuoteService.getAllQuotes().subscribe(data => {
      this.quotes = data;
      this.dataSource = this.quotes;
    })
  }
}
