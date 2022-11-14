import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    private url: string;

    constructor(private http: HttpClient) {
        this.url = 'http://localhost:8080/calculations';
    }

    public addition(param1: string, param2: string): Observable<any> {
        return this.http.get(`${this.url + '/addition'}`, {
            params: {
                num1: param1,
                num2: param2
            }
        })
    }

    public subtraction(param1: string, param2: string): Observable<any> {
        return this.http.get(`${this.url + '/subtraction'}`, {
            params: {
                num1: param1,
                num2: param2
            }
        })
    }

    public division(param1: string, param2: string): Observable<any> {
        return this.http.get(`${this.url + '/division'}`, {
            params: {
                num1: param1,
                num2: param2
            }
        })
    }

    public multiplication(param1: string, param2: string): Observable<any> {
        return this.http.get(`${this.url + '/multiplication'}`, {
            params: {
                num1: param1,
                num2: param2
            }
        })
    }
}