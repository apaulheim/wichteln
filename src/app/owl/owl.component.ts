import { Component, Input } from '@angular/core';

@Component({
  selector: 'owl',
  templateUrl: './owl.component.html',
  styleUrls: ['./owl.component.css'],
})
export class OwlComponent {
  @Input() image = 1;
  @Input() name = '';
}
