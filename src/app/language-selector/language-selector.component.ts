import {Component, OnInit} from '@angular/core';
import {TranslationsService} from '../translations/translations.service';
import {deutsch, english} from '../translations/translations';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  public selectedLang: string;
  public languageLabel: string;
  public languageEN: string;
  public languageDE: string;

  constructor(private translationService: TranslationsService) {
    this.languageLabel = translationService.getActiveTranslation().properties.langLabel;
    this.languageEN = translationService.getActiveTranslation().properties.languageEN;
    this.languageDE = translationService.getActiveTranslation().properties.languageDE;
  }

  ngOnInit(): void {
  }

  onChange(lang: string): void {
    console.log('.lang', lang);
    this.translationService.setLanguage(lang === 'en' ? english : deutsch);
    this.selectedLang = lang;
  }
}
