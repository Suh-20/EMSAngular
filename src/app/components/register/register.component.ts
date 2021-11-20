import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
@Component({
  selector: 'app-register',
  templateUrl: '/register.component.html',
  styleUrls: ['/register.component.css']
})

export class RegisterComponent implements OnInit {

  @Input()
  public customerDetails = { customername: '', contactno :'',emailid: '', password: '' };
  constructor(private restApi: CustomerService, public router: Router) {}

  ngOnInit(): void {}

  addCustomer() {
    console.log(this.customerDetails);
    this.restApi
      .createCustomer(this.customerDetails)
      .subscribe((data: {}) => this.router.navigate(['/cstrlist']));
  }

  

}