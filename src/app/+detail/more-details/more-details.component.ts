import { Component, Input } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`More Details` component loaded asynchronously');

@Component({
  selector: 'more-details',
  template:
    `<h2>More Details component loaded and compiled async.</h2>
     <ul>
      <li *ngFor="let detail of detailItems">
        {{detail}}
      </li>
     </ul>
    `
})
export class MoreDetailsComponent {
  @Input() detailItems: Array<string>;

  constructor() {}

  ngOnInit() {
    console.log('hello `More Details` component');
  }
}
