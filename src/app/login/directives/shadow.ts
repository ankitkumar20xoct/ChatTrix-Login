import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appShadow]',
  standalone: true
})
export class ShadowDirective implements OnInit {
  ngOnInit() {
    console.log('ShadowDirective active');
  }
}