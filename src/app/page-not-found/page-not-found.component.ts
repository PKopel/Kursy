import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<h1>Nie ma takiej strony</h1>`,
  styles: ['h1 { color: #e4623d; font-size: xx-large; padding: 20px}']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
