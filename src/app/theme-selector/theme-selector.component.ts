import {Component, OnInit} from '@angular/core';
import {ThemeService} from 'src/app/theme/theme.service';
import {TranslationsService} from '../translations/translations.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {
  public interfaceColor: string;
  public lightColorLabel: string;
  public darkColorLabel: string;
  private translationSubscription: Subscription;


  constructor(private themeService: ThemeService, private translationService: TranslationsService) {
    this.interfaceColor = translationService.getActiveTranslation().properties.interfaceColor;
    this.lightColorLabel = translationService.getActiveTranslation().properties.colors.color1;
    this.darkColorLabel = translationService.getActiveTranslation().properties.colors.color2;
  }

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.interfaceColor = data.properties.interfaceColor;
      this.lightColorLabel = data.properties.colors.color1;
      this.darkColorLabel = data.properties.colors.color2;
    });
  }

  setLightTheme(): void {
    this.themeService.setLightTheme();
  }

  setDarkTheme(): void {
    this.themeService.setDarkTheme();
  }
}
