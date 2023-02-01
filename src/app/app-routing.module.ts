import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {QuotesListComponent} from "./components/quotes-list/quotes-list.component";
import {QuoteComponent} from "./components/quote/quote.component";
import {LogInComponent} from "./components/log-in/log-in.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'quotes', component: QuotesListComponent},
  {path:'quote', component: QuoteComponent},
  {path:'quote/:id', component: QuoteComponent},
  {path:'login', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
