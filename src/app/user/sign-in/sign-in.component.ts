import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./../user.module.css']
})
export class SignInComponent implements OnInit {
  registerForm: FormGroup;
  returnUrl: string;

  elements = [
    {
      name: 'firstName', label: 'Imię', messages: {required: 'podaj imię'}, error: '', type: 'text'
    },
    {
      name: 'lastName', label: 'Nazwisko', messages: {required: 'podaj nazwisko'}, error: '', type: 'text'
    },
    {
      name: 'email', label: 'Email', messages: {required: 'podaj adres email'}, error: '', type: 'text'
    },
    {
      name: 'password',
      label: 'Hasło',
      messages: {required: 'podaj hasło', minLength: 'hasło ma mieć co najmniej 10 znaków'},
      error: '',
      type: 'password'
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    if (localStorage.getItem('user')) {
      this.router.navigate(['courses']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.registerForm.valueChanges.subscribe(() => {
      setTimeout(() => {
        this.onControlValueChanged();
      }, 2000);
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'courses';
  }

  onControlValueChanged(): void {
    const form = this.registerForm;

    for (const element of this.elements) {
      element.error = '';
      const control = form.get(element.name);

      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            element.error = element.messages[key];
          }
        }
      }
    }
  }

  onSubmit(form: FormGroup): void {

    if (form.invalid) {
      return;
    }
    this.authenticationService.signIn(form.value.email, form.value.password).then(cs => {
      if (cs) {
        this.userService.addUser({
          firstName: form.value.firstName,
          lastName: form.value.lastName,
          uid: cs.user.uid,
          email: form.value.email,
          roles: {student: 'student'},
          courses: []
        }, cs.user.uid);
        this.router.navigate([this.returnUrl]);
      }
    });
  }
}
