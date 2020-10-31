import { Component, OnInit } from '@angular/core';
import { faCog, faComment } from '@fortawesome/free-solid-svg-icons';
import { TranslationsService } from '../translations/translations.service';
import { Subscription } from 'rxjs';
import { ThemeService } from '../theme/theme.service';
import { readRecord } from '../utilities/localStorageService';

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


  constructor(private translationService: TranslationsService, private themeService: ThemeService) {
  }

  ngOnInit(): void {
    readRecord('theme') === 'light' ? this.themeService.setLightTheme() : this.themeService.setDarkTheme();
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.chatTabLabel = data.properties.nav.chatTabLabel;
      this.settingsTabLabel = data.properties.nav.settingsTabLabel;
    });
  }
}
