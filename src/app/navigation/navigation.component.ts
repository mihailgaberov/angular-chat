import {Component, OnInit} from '@angular/core';
import {faComment, faCog} from '@fortawesome/free-solid-svg-icons';
import {TranslationsService} from '../translations/translations.service';

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

  constructor(private translationService: TranslationsService) {
    this.chatTabLabel = translationService.getActiveTranslation().properties.nav.chatTabLabel;
    this.settingsTabLabel = translationService.getActiveTranslation().properties.nav.settingsTabLabel;
  }

  ngOnInit(): void {}
}
