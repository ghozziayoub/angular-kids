import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { OwnerService } from '../services/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private ownerService: OwnerService, private router: Router) {

    this.registerForm = fb.group({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  get first_name() { return this.registerForm.get('first_name') }
  get last_name() { return this.registerForm.get('last_name') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }

  ngOnInit() {
  }

  register() {
    let data = this.registerForm.value;

    this.ownerService.registerUser(data).subscribe(
      res => {
        this.router.navigateByUrl('/login')
      },
      err => {
        console.log(err);
      }
    )


  }

}
