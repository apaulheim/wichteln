import { Component } from '@angular/core';
enum Page {
  OVERVIEW,
  DETAIL,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-test';
  names = ['Silva', 'Leon', 'Lukas', 'Chris', 'Anni'];
  currentPage = Page.OVERVIEW;
  currentWichtel = 0;

  Page = Page;

  detailsFor(index: number) {
    this.currentWichtel = index;
    this.currentPage = Page.DETAIL;
  }
}
