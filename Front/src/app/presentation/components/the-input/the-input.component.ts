import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-the-input',
  templateUrl: './the-input.component.html',
  styleUrls: ['./the-input.component.sass']
})
export class TheInputComponent implements OnInit {
  @Input() label: string = 'Label'
  @Input() placeholder: string = ''
  @Input() type: string = 'text'
  @Input() propertieClass: string = ''
  @Input() icon: any = ''
  @Input() inputModel: any

  @Output() inputModelChange = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
