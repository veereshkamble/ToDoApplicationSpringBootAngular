import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message:string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient 
  ) { }

  executeHelloWorldBeanService() {
    console.log("Execute  Hello World Bean Service")
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    console.log("Execute  Hello World Bean Service")
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}` );
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'veereshkamble'
    let password = 'password'
  }
  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean/path-variable/veereshkamble' from origin 
  // 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
