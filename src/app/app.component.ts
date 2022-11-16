import { Component } from '@angular/core';
import { AppService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private appService: AppService) {
  }
  title = 'labs2-front';
  result: any
  Operation: any = ['+', '-', '*', '/'];
  operation_type: string = ''
  param1_val: string = ''
  param2_val: string = ''

  changeOperation(e: any): string {
    console.log(e.target.value)
    this.operation_type = e.target.value
    return this.operation_type
  }

  changeParam1(e: any): string {
    console.log(e.target.value)
    this.param1_val = e.target.value
    return this.param1_val
  }

  changeParam2(e: any): string {
    console.log(e.target.value)
    this.param2_val = e.target.value
    return this.param2_val
  }

  getResult(param1: string, param2: string) {
    if (this.operation_type == '+') {
      this.appService.addition(param1, param2).subscribe(res => { this.result = res })
    }
    if (this.operation_type == '-') {
      this.appService.subtraction(param1, param2).subscribe(res => { this.result = res })
    }
    if (this.operation_type == '*') {
      this.appService.multiplication(param1, param2).subscribe(res => { this.result = res })
    }
    if (this.operation_type == '/') {
      this.appService.division(param1, param2).subscribe(res => { this.result = res })
    }
  }
}

