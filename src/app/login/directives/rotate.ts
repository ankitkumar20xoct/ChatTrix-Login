import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appRotate]',
  standalone: true
})
export class RotateDirective implements OnInit {
  ngOnInit() {
    console.log('RotateDirective active');
  }
}