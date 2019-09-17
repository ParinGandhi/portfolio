import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quoteToDisplay: {};

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getQuotes().subscribe(quotes => {
      this.quoteToDisplay = quotes[Math.floor(Math.random() * quotes.length + 1)];

    }, error => {
      console.log(error);
    });

  }

}
