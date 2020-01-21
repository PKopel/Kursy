import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./../user.module.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  emailError: string;
  passwordError: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthenticationService
  ) {
    if (localStorage.getItem('user')) {
      this.router.navigate(['courses']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      setTimeout(() => {
        this.onControlValueChanged();
      }, 2000);
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'courses';
  }

  onControlValueChanged(): void {
    const form = this.loginForm;

    const email = form.get('email');
    this.emailError = '';
    if (email && email.dirty && !email.valid) {
      if (email.errors.hasOwnProperty('required')) {
        this.emailError = 'podaj adres email';
      }
    }

    const password = form.get('password');
    this.passwordError = '';
    if (password && password.dirty && !password.valid) {
      if (password.errors.hasOwnProperty('required')) {
        this.emailError = 'podaj hasło';
      }
    }
  }

  onSubmit(form: FormGroup): void {

    if (form.invalid) {
      return;
    }
    this.service.logIn(form.value.email, form.value.password, this.returnUrl);
  }
}
