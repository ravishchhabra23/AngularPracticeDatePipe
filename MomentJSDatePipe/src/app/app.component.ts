import { Component } from '@angular/core';
declare var moment: any;

@Component({
  selector: 'my-app',
  template: `<h1>Custom Date Pipe</h1>
    <span>Enter Date and Format : </span>
    <input type="text" [(ngModel)]="currentDate" placeholder="Enter date">
    <input type="text" [(ngModel)]="enteredFormat" placeholder="Enter format">
    <button (click)="click(currentDate)">Calculate Time Passed</button><br>
    <span>Entered Date: </span>{{currentDate}}<br>
    <span>Formatted Date: </span>{{currentDate | MyDatePipe:enteredFormat}}<br>
    <span>Actual Passed Time From Now: </span> {{timepassed}} 
  `,
  styles:[`span{font-weight:bold;}`]
})
export class AppComponent  { 
  constructor(){
    this.currentDate = "07/20/2017";
    this.enteredFormat = "DD/MM/YYYY";
  }
  click(nowDate:any)  {
    this.timepassed = moment(nowDate,"MM/DD/YYYY").fromNow();
  }
  public currentDate:any;
  public enteredFormat:any;
  public timepassed:any;
}
