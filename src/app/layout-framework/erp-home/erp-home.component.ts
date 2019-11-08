import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erp-home',
  templateUrl: './erp-home.component.html',
  styleUrls: ['./erp-home.component.scss']
})
export class ErpHomeComponent implements OnInit {
  alarmCount = 0;
  constructor() { }

  ngOnInit() {
  }

  logout(){
    console.log("logout");
    
  }
}
