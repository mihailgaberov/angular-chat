import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {
  @Input()
  time = '';

  constructor() { }

  ngOnInit(): void {
  }

}
