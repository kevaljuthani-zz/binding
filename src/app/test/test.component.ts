import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome " + name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteURL}}</h2>
  <input [id]="myId" type="text" value="Keval">
  <input bind-disabled = "isDisabled" [id]="myId" type="text" value="Keval">
  <h2 class= "text-success">Keval</h2>
  <h2 [class]= "successClass">Keval</h2>
  <h2 [class.text-danger]= "hasError">Keval</h2>
  <h2 [ngClass] = "messageClasses">Keval Juthani</h2>
  <h2 [style.color] = "hasError ? 'red' : 'green'">Style Binding</h2>
  <h2 [ngStyle] = "titleStyles">Style Binding 2</h2>
  <button (click)="onClick($event)">Greet</button>
  {{greetings}}
  <input #myInput type = "text">
  <button (click) = "logMessage(myInput.value)">Log me!</button><br>
  <input [(ngModel)] = "twoWayBindingText" type = "text"> {{twoWayBindingText}}
  
  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
      font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {
  public name = "Jay";
  public siteURL = window.location.href;
  public myId = "testId";
  public isDisabled = false;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public greetings="";
  public twoWayBindingText = "";

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };

  public titleStyles = {
    color:"blue",
    fontStyle:"italic"
  };
  constructor() { }

  onClick(event){
    console.log(event);
    this.greetings = "Welcome to the world!";
  }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  logMessage(value){
    console.log(value);
  }

}
