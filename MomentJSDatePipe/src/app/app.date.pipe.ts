import {Component,Pipe,PipeTransform} from '@angular/core'
declare var moment: any;

@Pipe({
    name: 'MyDatePipe'
})
export class MyDatePipe implements PipeTransform {
transform(date:any,format:any) {
    return moment(date,"MM/DD/YYYY").format(format);
}
}