import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-data-home',
  templateUrl: './system-data-home.component.html',
  styleUrls: ['./system-data-home.component.scss']
})
export class SystemDataHomeComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  go() {
    this.router.navigate([{ outlets: { aux1: 'addproductunit' } }]);
  }

  go2() {
    this.router.navigateByUrl('home/systemdatahome/addproductunit');
  }
}
