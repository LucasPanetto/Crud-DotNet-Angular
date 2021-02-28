import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-the-button',
  templateUrl: './the-button.component.html',
  styleUrls: ['./the-button.component.sass']
})
export class TheButtonComponent implements OnInit {
  @Input() text: string = 'Botão'
  @Input() propertieClass: any = ''
  @Input() type: string = 'button'

  @Output() buttonClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
