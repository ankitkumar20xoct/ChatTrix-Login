import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appScale]',
  standalone: true
})
export class ScaleDirective implements OnInit {
  ngOnInit() {
    console.log('ScaleDirective active');
  }
}