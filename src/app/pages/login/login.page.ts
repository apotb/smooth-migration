import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
})

export class LoginPage implements OnInit {
    loginForm: FormGroup;
    email: string | null = null;
    password: string | null = null;
    emailError: string = "Invalid email";
    passwordError: string = "Invalid password";

  constructor(private router: Router, private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]]
      });
  }

  ngOnInit() {
      //TODO: Implement already signed in check
      // This OnInit function is used on startup to pull up data and use it in
      // the rest of the page.  Essentially, this is where we should check if
      // the user has already signed in before
  }

  public forgot_email_password() {
      //TODO: Open Smooth Migration Forgot email/password web page
      console.log("forgot email-password pressed");
  }

  public login() {
      /*
       * this.email, this.password -> class variables pointing to input form value, updated at login button press
       * this.emailError, this.passwordError -> binded property from html, links value there with error message we set here
       * this.loginForm[...].valid -> Input validation check to see if current input valid or not
       * this.loginForm[...].setErrors -> Sets an input into error state or not, for custom styling with our errors
       */
      this.email = this.loginForm.get("email")?.value;
      this.password = this.loginForm.get("password")?.value;
      
      // This is purely to make password say 'Invalid password' on incorrect login
      if (this.loginForm.get("email")?.valid) {
          this.loginForm.get("email")?.setErrors(null);
          this.loginForm.get("password")?.setErrors(null);
      }
        
      // Here, input validation for correct style of email (@ symbol with letter after)
      if (this.loginForm.valid) {
          //TODO: API Check for account
          // email && password are actual account
          if (this.password === "test") {
              if (1 === 1 /* Individual has never signed in before, open legal */) {
                  //REMOVE: Get rid of the queryParams part once we have user authentication
                  this.router.navigate(['/legal-popup']);
              } else { /* Signed in before, just go to tabs */
                  this.router.navigate(['/tabs']);
              }
          } else if (this.password === "root") {
                this.router.navigate(['/tabs']);
          } else {
              this.emailError = "Account not found";
              this.passwordError = "Account not found";
              this.loginForm.markAllAsTouched();
              this.loginForm.get("password")?.setErrors({ customError: true });
          }

      } else {
          this.emailError = "Invalid email";
          this.passwordError = "Invalid password";
          this.loginForm.markAllAsTouched();
          this.loginForm.get("password")?.setErrors({ customError: true });
      }
  }

  public register() {
      //TODO: Open SmoothMigration account registry web page
      console.log("forgot register pressed");
  }

}
