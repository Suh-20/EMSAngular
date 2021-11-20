import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../Customer';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  public customers = [] as any;
  public selectedId: number = 0;
  constructor(private cservice: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.cservice
      .getCustomerFromService()
      .subscribe((data) => (this.customers = data));
  }

  onDelete(cstr: Customer) {
    this.selectedId = cstr.customerid;
    console.log(this.selectedId);
    if (window.confirm('Are your sure, you want to delete?')) {
      this.cservice.deleteCustomer(this.selectedId).subscribe((data) => {
        this.router.navigate(['/cstrist']);
      });
    }
  }
}

