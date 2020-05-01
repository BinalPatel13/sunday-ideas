import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  signupForm: FormGroup;
  isLoginMode = true;
 @Input() header: HeaderComponent;
  
  constructor( private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
      }),
     
    });
    
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
   
  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
}

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
    this.router.navigate(['/home']);
   this.header.isLogin = true;
  }
}
