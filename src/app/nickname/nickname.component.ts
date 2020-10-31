import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.scss']
})
export class NicknameComponent implements OnInit {
  public nickname = 'User001';

  constructor() {}

  ngOnInit(): void {
  }

}
