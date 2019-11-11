import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'veereshkamble'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log('Username: ' + this.username);
    // alert('Hello, ' + this.username);

    //if(this.username === 'veereshkamble' && this.password === 'password') {
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
