import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        console.log("input",input);
        console.log("value",value);
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return true
            })
        }
        return value;
    }
}