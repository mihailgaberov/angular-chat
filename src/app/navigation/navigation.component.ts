import {Component, OnInit} from '@angular/core';
import {faComment, faCog} from '@fortawesome/free-solid-svg-icons';
import {TranslationsService} from '../translations/translations.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  faComment = faComment;
  faCog = faCog;

  public chatTabLabel: string;
  public settingsTabLabel: string;
  private translationSubscription: Subscription;


  constructor(private translationService: TranslationsService) {}

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.chatTabLabel = data.properties.nav.chatTabLabel;
      this.settingsTabLabel = data.properties.nav.settingsTabLabel;
    });
  }
}
