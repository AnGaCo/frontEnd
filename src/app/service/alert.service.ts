import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSource = new Subject();
  alert$ = this.alertSource.asObservable();

  constructor() { }

  showAlert(message:string, time:number = 5000, type:number = 1) {
    this.alertSource.next({ message, time, type });
  }
}
