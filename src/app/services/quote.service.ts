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
}
