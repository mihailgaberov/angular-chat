import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.scss']
})
export class NicknameComponent implements OnInit {

  @Input()
  nickname = '';

  constructor() {}

  ngOnInit(): void {
  }

}
