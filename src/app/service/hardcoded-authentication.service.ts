import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate (username, password) {
    if(username == "veereshkamble" && password == "password") {
      return true;
    } else {
      return false;
    }
  }
}
