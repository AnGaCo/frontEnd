import { Component } from '@angular/core';
import { AlertService } from './service/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';

  showAlertSuccess = false;
  showAlertDanger = false;
  message = '';

  constructor(
    private alertService:AlertService
  ) {}

  ngOnInit() {
    this.alertService.alert$.subscribe(
      (data:any) => {
        this.message = data.message;
        if(data.type == 1){
          this.showAlertSuccess = true;
          setTimeout(() => { this.showAlertSuccess = false; }, data.time);
        }else{
          this.showAlertDanger = true;
          setTimeout(() => { this.showAlertDanger = false; }, data.time);
        }
      });
  }
}
