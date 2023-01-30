import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Quote} from "../models/Quote";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) {
  }

  getAllQuotes(): Observable<Quote[]>{
    return this.http.get<Quote[]>('/quotes');
  }

  getQuoteById(id: number): Observable<Quote>{
    return this.http.get<Quote>('/quotes/${id}');
  }

  insertQuote(quote: any): Observable<any>{
    debugger
    return this.http.post<any>('/quotes', quote);
  }

  updateQuote(quote: any): Observable<any>{
    return this.http.put('/quotes', quote);
  }

  deleteQuote(id: number): Observable<any>{
    return this.http.delete('/quotes/${id}');
  }
}
