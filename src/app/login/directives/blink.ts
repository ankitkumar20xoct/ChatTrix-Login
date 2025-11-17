import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlink]',
  standalone: true
})
export class BlinkDirective implements OnInit {
  ngOnInit() {
    console.log('BlinkDirective active');
  }
}