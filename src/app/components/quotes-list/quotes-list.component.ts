import {Component} from '@angular/core';
import {Quote} from 'src/app/models/Quote';
import {QuoteService} from "../../services/quote.service";

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})


export class QuotesListComponent {
  username: string = 'nikolina';
  quotes: Quote[] = [];
  displayedColumns: string[] = ['id', 'quoteText', 'quoteNarrator', 'delete', 'edit'];
  dataSource: Quote[] = [];

  constructor(private QuoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.QuoteService.getAllQuotes().subscribe(data => {
      this.quotes = data;
      this.dataSource = this.quotes;
    })
  }

  delete(id: number){
    this.QuoteService.deleteQuote(id).subscribe(data => {
      this.ngOnInit();
    })
  }

}
