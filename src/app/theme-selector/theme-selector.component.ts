import {Component, OnInit} from '@angular/core';
import {ThemeService} from 'src/app/theme/theme.service';
import {TranslationsService} from '../translations/translations.service';
import {Subscription} from 'rxjs';
import {readRecord, storeToLocalStorage} from '../utilities/localStorageService';
import {dark, light} from '../theme/theme';

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


  constructor(private themeService: ThemeService, private translationService: TranslationsService) {}

  ngOnInit(): void {
    this.themeService.setActiveTheme(readRecord('theme') === 'light' ? light : dark);
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.interfaceColor = data.properties.interfaceColor;
      this.lightColorLabel = data.properties.colors.color1;
      this.darkColorLabel = data.properties.colors.color2;
    });
  }

  setLightTheme(): void {
    this.themeService.setLightTheme();
    storeToLocalStorage('theme', 'light');
  }

  setDarkTheme(): void {
    this.themeService.setDarkTheme();
    storeToLocalStorage('theme', 'dark');
  }
}
