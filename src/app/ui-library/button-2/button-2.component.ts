import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'poke-button-2',
  templateUrl: './button-2.component.html',
  styleUrls: ['./button-2.component.css']
})
export class Button2Component implements OnInit {
  @Input() text;

  constructor() { }

  ngOnInit() {
  }

}
