import { Component, ViewChild, Compiler, ViewContainerRef } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
    <h1>Hello from Detail</h1>
    <router-outlet></router-outlet>
    
    <template #moreDetailsContainer></template>
  `
})
export class DetailComponent {
  @ViewChild('moreDetailsContainer', { read: ViewContainerRef }) moreDetailsContainer: ViewContainerRef;

  constructor(public compiler: Compiler) { }

  ngOnInit() {
    console.log('hello `Detail` component');

    // Put a two second delay so we can demonstrate that it loads async
    setTimeout(() => {
      this.loadMoreDetails();
    }, 2000);
  }

  private loadMoreDetails(): Promise<any> {
    this.moreDetailsContainer.clear();

    return new Promise((resolve) => {
      System.import('./more-details')
        .then((modules) => modules.MoreDetailsModule)
        .then((moreDetailsModule) => {
          return this.compiler.compileModuleAndAllComponentsAsync(moreDetailsModule);
        }).then((moduleWithFactories) => {

        const factory = moduleWithFactories.componentFactories.find(
          x => x.selector === 'more-details'
        );

        const component = this.moreDetailsContainer.createComponent(factory).instance;
        component.detailItems = ['Detail 1', 'Detail 2', 'Detail 3'];

        resolve();
      });
    });
  }
}
