import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslationsService} from '../translations/translations.service';
import {deutsch, english} from '../translations/translations';
import {Subscription} from 'rxjs';

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
    this.languageEN = translationService.getActiveTranslation().properties.languageEN;
    this.languageDE = translationService.getActiveTranslation().properties.languageDE;
  }

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.languageLabel = data.properties.languageLabel;
      this.selectedLanguage = data.name === 'en';
    });
  }

  ngOnDestroy(): void {
    this.translationSubscription.unsubscribe();
  }

  onChange(lang: string): void {
    this.translationService.setActiveLanguage(lang === 'de' ? deutsch : english);
  }
}
