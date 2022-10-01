//#region @notForNpm

//#region @browser
    import { NgModule } from '@angular/core';
    import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-ng2-button-loader',
      template: 'hello from ng2-button-loader'
    })
    export class Ng2ButtonLoaderComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
    }

    @NgModule({
      imports: [],
      exports: [Ng2ButtonLoaderComponent],
      declarations: [Ng2ButtonLoaderComponent],
      providers: [],
    })
    export class Ng2ButtonLoaderModule { }
    //#endregion

    //#region @backend
    async function start(port: number) {
      console.log('hello world from backend');
    }

    export default start;

//#endregion

//#endregion