import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerpageService } from '../customerpage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeDetails = { etype: '', vname: '', vtype: '', date: '',equipments:'',nguests:'',fooditems:'' };
  constructor(private restApi: CustomerpageService, public router: Router) { }

  ngOnInit(): void {
  }
  addCustomerPage() {
    console.log(this.homeDetails);
    this.restApi
      .createCustomerPage(this.homeDetails)
      .subscribe((data: {}) => this.router.navigate(['/booking']));
}

}