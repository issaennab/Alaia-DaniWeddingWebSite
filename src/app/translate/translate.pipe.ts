import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service'; // our translate service

@Pipe({
    name: 'translate',
    pure: false // add in this line, update value when we change language
})

export class TranslatePipe implements PipeTransform {

    constructor(private _translate: TranslateService) { }

    transform(value: string, args: any[]): any {
        if (!value) return;
        return this._translate.instant(value);
    }
}