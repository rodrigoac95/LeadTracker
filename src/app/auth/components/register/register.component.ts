import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  flagPwError: number;

  constructor() { }

  ngOnInit() {
    this.flagPwError = 0;
  }

  onSubmit(f: NgForm) {
    if((this.checkPw(f.value.password) && (f.value.password == f.value.passwordconfirmation))){
      this.flagPwError = 1;
    }
    else{
      this.flagPwError = 2;
    }
    
  }

  checkPw(str:string){
    //RegEx para detectar se a password contem todos os parametros necessários
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(str.match(decimal) && str.length > 7){
      console.log('deubom');
      return true
    }
    else{
      console.log('deuruim')
      return false
    }
  
  }

}
