import {Component} from '@angular/core';
import {QuoteService} from "../../services/quote.service";
import {Quote} from "../../models/Quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})


export class QuoteComponent {

  quote: Quote = new Quote;

  constructor(private QuoteService: QuoteService) {

  }

  save() {
    if(!this.quote.quoteText || !this.quote.quoteNarrator){
      alert('Please insert all information')
    }
    this.QuoteService.insertQuote(this.quote).subscribe(data => {
      this.quote = new Quote;
    });
  }
}
