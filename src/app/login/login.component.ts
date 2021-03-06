import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleJWTAuthLogin() {
    console.log('In handleBasicAuthLogin()')
    // console.log('Username: ' + this.username);
    // alert('Hello, ' + this.username);

    //if(this.username === 'veereshkamble' && this.password === 'password') {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

  handleBasicAuthLogin() {
    console.log('In handleBasicAuthLogin()')
    // console.log('Username: ' + this.username);
    // alert('Hello, ' + this.username);

    //if(this.username === 'veereshkamble' && this.password === 'password') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

  handleLogin() {
    console.log('In handleLogin')
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
