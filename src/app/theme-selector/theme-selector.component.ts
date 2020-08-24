import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { TranslationsService } from '../translations/translations.service';
import { Subscription } from 'rxjs';
import { readRecord, storeToLocalStorage } from '../utilities/localStorageService';
import { dark, light } from '../theme/theme';
import { THEMES } from '../enums/themes';

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
  public selectedTheme: boolean;

  constructor(private themeService: ThemeService, private translationService: TranslationsService) {
    this.selectedTheme = readRecord('theme') === THEMES.light;
  }

  ngOnInit(): void {
    this.themeService.setActiveTheme(readRecord('theme') === THEMES.light ? light : dark);
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.interfaceColor = data.properties.interfaceColor;
      this.lightColorLabel = data.properties.colors.color1;
      this.darkColorLabel = data.properties.colors.color2;
    });
  }

  setLightTheme(): void {
    this.themeService.setLightTheme();
    storeToLocalStorage('theme', THEMES.light);
  }

  setDarkTheme(): void {
    this.themeService.setDarkTheme();
    storeToLocalStorage('theme', THEMES.dark);
  }
}
