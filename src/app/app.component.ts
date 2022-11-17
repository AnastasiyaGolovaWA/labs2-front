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
  System: any = ['2', '8', '10', '16'];
  operation_type: string = ''
  param1_val: string = ''
  param2_val: string = ''
  param3_val: string = ''
  pattern: RegExp = /[]/

  changeOperation(e: any): string {
    console.log(e.target.value)
    this.operation_type = e.target.value
    return this.operation_type
  }

  getPatternParam1() {
    if (this.param3_val == '2') {
      this.pattern = /[0-1]/
    }
    if (this.param3_val == '8') {
      this.pattern = /[0-7]/
    }
    if (this.param3_val == '16') {
      this.pattern = /[0-9A-F]/
    }
    if (this.param3_val == '10') {
      this.pattern = /[0-9]/
    }
    return this.pattern
  }

  getPatternParam2() {
    if (this.param3_val == '2') {
      this.pattern = /[0-1]/
    }
    if (this.param3_val == '8') {
      this.pattern = /[0-7]/
    }
    if (this.param3_val == '16') {
      this.pattern = /[0-9A-F]/
    }
    if (this.param3_val == '10') {
      this.pattern = /[0-9]/
    }
    if (this.operation_type == '/') {
      console.log(this.pattern.multiline)
    }
    return this.pattern
  }

  keyPress(event: KeyboardEvent, pattern: any) {
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  changeSystem(e: any): string {
    console.log(e.target.value)
    this.param3_val = e.target.value
    return this.param3_val
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

  getResult(param1: string, param2: string, param3: string) {
    if (this.operation_type == '+') {
      this.appService.addition(param1, param2, param3).subscribe(res => { this.result = res })
    }
    if (this.operation_type == '-') {
      this.appService.subtraction(param1, param2, param3).subscribe(res => { this.result = res })
    }
    if (this.operation_type == '*') {
      this.appService.multiplication(param1, param2, param3).subscribe(res => { this.result = res })
    }
    if (this.operation_type == '/') {
      this.appService.division(param1, param2, param3).subscribe(res => { this.result = res })
    }
  }
}

