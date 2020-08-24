import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationsService } from '../translations/translations.service';
import { deutsch, english, Translations } from '../translations/translations';
import { Subscription } from 'rxjs';
import { readRecord, storeToLocalStorage } from '../utilities/localStorageService';
import { LANGUAGES } from '../enums/languages';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  public languageLabel: string;
  public languageEN: string;
  public languageDE: string;
  public selectedLanguage: boolean;
  private translationSubscription: Subscription;

  constructor(private translationService: TranslationsService) {
    this.selectedLanguage = readRecord('lang') === LANGUAGES.english;
    this.languageEN = translationService.getActiveTranslation().properties.languageEN;
    this.languageDE = translationService.getActiveTranslation().properties.languageDE;
  }

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.languageLabel = data.properties.languageLabel;
    });
  }

  ngOnDestroy(): void {
    this.translationSubscription.unsubscribe();
  }

  onChange(lang: string): void {
    const currentSelectedLanguage: Translations = lang === LANGUAGES.english ? english : deutsch;
    this.translationService.setActiveLanguage(currentSelectedLanguage);
    storeToLocalStorage('lang', lang);
  }
}
