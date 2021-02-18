import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';
let url = require('file!./350.gif');

import { Log, Level } from 'ng2-logger';
const log = Log.create('button save', Level.__NOTHING);

import { ButtonState } from './button-state';

@Component({
    selector: 'button-save',
    template: require('./button-save.component.html'),
    styles: [require('./button-save.component.scss')]
})
export class ButtonSaveComponent implements OnInit {
    private static instances = {};
    // @HostBinding('style.width.px') width: number = 100;
    @Input() id: string;
    @Input() disabled: boolean = false;
    withError: boolean = false;

    @Input() textSuccess: string = 'Saved...';
    @Input() textError: string = 'Error...';
    type: string = 'primary';
    state: ButtonState = ButtonState.NORMAL;


    buttonState = ButtonState;

    static timeoutMessages: number = 1000;
    private loaderImgUlr = url;
    static setState(id: string, state: ButtonState) {
        let d: ButtonSaveComponent = ButtonSaveComponent.instances[id];
        d.state = state;

        if (state === ButtonState.ERROR) {
            d.withError = true;
        }
        if (state === ButtonState.ERROR || state === ButtonState.FINISH) {
            setTimeout(() => {
                d.state = ButtonState.NORMAL;
            }, ButtonSaveComponent.timeoutMessages);
        }
    }


    onClick() {
        if (this.withError) this.withError = false;
    }

    constructor(private element: ElementRef) {

    }

    ngOnInit() {
        log.i('success message', this.textSuccess);
        log.i('error message', this.textError);
        if (!this.id) throw new Error('No id for compnent button save');
        ButtonSaveComponent.instances[this.id] = this;
    }

}