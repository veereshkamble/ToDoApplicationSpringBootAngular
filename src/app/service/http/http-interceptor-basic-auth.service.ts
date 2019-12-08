import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'veereshkamble'
    let password = 'password'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    
    request = request.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    })
  }
}
