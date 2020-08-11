import { Component, OnInit } from '@angular/core';
import { faComment, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  faComment = faComment;
  faCog = faCog;

  constructor() { }

  ngOnInit(): void {
  }

}
