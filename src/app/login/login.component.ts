import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { OwnerService } from '../services/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private ownerService: OwnerService, private router: Router) {

    this.loginForm = fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  ngOnInit() {
  }

  login() {
    let data = this.loginForm.value;

    this.ownerService.loginUser(data).subscribe(
      res => {
        this.router.navigateByUrl('/')
      },
      err => {
        console.log(err);
      }
    )


  }
}
