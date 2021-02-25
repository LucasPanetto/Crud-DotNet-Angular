import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-the-input',
  templateUrl: './the-input.component.html',
  styleUrls: ['./the-input.component.sass']
})
export class TheInputComponent implements OnInit {
  @Input() label: string = 'Label'
  @Input() type: string = 'text'
  @Input() inputModel: any

  @Output() inputModelChange = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
