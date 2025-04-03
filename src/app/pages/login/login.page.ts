import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
      //TODO: Implement already signed in check
      // This OnInit function is used on startup to pull up data and use it in
      // the rest of the page.  Essentially, this is where we should check if
      // the user has already signed in before
  }

  login() {
      //TODO: Check SmoothMigration with login information for if account
      // already exists.  API to check if account exists

      console.log("Navigating to tabs page...");
      this.router.navigate(['/tabs']);
  }

}
