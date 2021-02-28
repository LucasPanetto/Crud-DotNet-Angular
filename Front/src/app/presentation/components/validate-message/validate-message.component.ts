import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate-message',
  templateUrl: './validate-message.component.html',
  styleUrls: ['./validate-message.component.sass']
})
export class ValidateMessageComponent implements OnInit {
  @Input() entity: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.entity)
  }

}
