import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// import the 5 standalone directives
import { HighlightDirective } from './directives/highlight';
import { BlinkDirective } from './directives/blink';
import { RotateDirective } from './directives/rotate';
import { ShadowDirective } from './directives/shadow';
import { ScaleDirective } from './directives/scale';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    HighlightDirective,
    BlinkDirective,
    RotateDirective,
    ShadowDirective,
    ScaleDirective
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  isDisabled = false;
  showAnnouncements = true;
  isLoggedIn = false;
  loginMode = 'email';
  socialOptions = ['Facebook', 'Google', 'Apple'];
}