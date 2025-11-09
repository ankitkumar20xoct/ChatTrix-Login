import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent { 
   loginTips = [
    "Use a strong password",
    "Never share your credentials",
    "Check caps lock before typing",
    "Avoid using public Wi-Fi while logging in"
  ];
}
