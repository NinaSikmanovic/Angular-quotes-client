import {Component} from '@angular/core';
import {QuoteService} from "../../services/quote.service";
import {Quote} from "../../models/Quote";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})


export class QuoteComponent {

  quote: Quote = new Quote;
  isEditPage: boolean = false;

  constructor(private QuoteService: QuoteService, private ActivatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data => {
      if (data['id']) {
        this.isEditPage = true;
        this.QuoteService.getQuoteById(data['id']).subscribe(data => {
          this.quote = data;
        })
      }
    })
  }

  save() {
    if (!this.quote.quoteText || !this.quote.quoteNarrator) {
      alert('Please insert all information')
    }
    if (this.isEditPage) {
      this.QuoteService.updateQuote(this.quote).subscribe(data => {

      })
    } else {
      this.QuoteService.insertQuote(this.quote).subscribe(data => {
        this.quote = new Quote;
      });
    }
  }
}
