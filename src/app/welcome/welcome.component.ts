import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message = 'Some welcome message'
  name = ''
  welcomeMessageFromService:string
  errorMessageFromService:string
       
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message)
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log("get welcome message called")
    console.log(this.service.executeHelloWorldBeanService())

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    console.log("last line of get Welcome messaage")
  }

  getWelcomeMessageWithPathVariable() {
    console.log("get welcome message with path variable called")
    console.log(this.service.executeHelloWorldBeanService())

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    console.log("last line of get Welcome messaage")
  }

  handleSuccessfulResponse(response) {
    console.log(response)
    console.log(response.message)
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error) {
    console.log(error)
    console.log(error.error)
    console.log(error.error.message)
    this.errorMessageFromService = error.error.message
  }
}
