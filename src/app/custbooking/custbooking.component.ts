import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookpaymentService } from '../bookpayment.service';

@Component({
  selector: 'app-custbooking',
  templateUrl: './custbooking.component.html',
  styleUrls: ['./custbooking.component.css']
})
export class CustbookingComponent implements OnInit {
  @Input()
  public custbookingDetails = { bid: '', fitems: '', fcost: '', fid: '' };
  constructor(private restApi: BookpaymentService, public router: Router) {}
  

  ngOnInit(){
  }
  addBook() {
    console.log(this.custbookingDetails);
    this.restApi
      .createBookpayment(this.custbookingDetails)
      .subscribe((data: {}) => this.router.navigate(['/booklist']));
  }
}
