import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/loginservice.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  
})
export class LogInComponent implements OnInit {
  @Input()
  public loginDetails = { emailid: '', password: '' };
  constructor(private restApi: LoginService, public router: Router) {}

  ngOnInit(): void {}

  getCustomer() {
    console.log(this.loginDetails);
    this.restApi
      .getCustomer()
      .subscribe((data: {}) => this.router.navigate(['/cstrlist']));
  }


}
