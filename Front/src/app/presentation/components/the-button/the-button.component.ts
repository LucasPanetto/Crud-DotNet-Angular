import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-the-button',
  templateUrl: './the-button.component.html',
  styleUrls: ['./the-button.component.sass']
})
export class TheButtonComponent implements OnInit {
  @Input() text: string = ''
  @Input() icon: string = ''
  @Input() propertieClass: any = ''
  @Input() type: string = 'button'
  @Input() isDisabled: boolean = false

  @Output() buttonClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  clickButton(): void {
    this.buttonClick.emit('clickButton');
  }
}
