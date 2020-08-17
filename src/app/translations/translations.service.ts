import { Injectable } from '@angular/core';
import { english, deutsch, Translations } from './translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {
  private active: Translations = english;
  private availableTranslations: Translations[] = [english, deutsch];

  getAvailableTranslations(): Translations[] {
    return this.availableTranslations;
  }

  getActiveTranslation(): Translations {
    return this.active;
  }

  setEnglish(): void {
    this.setActiveLanguage(english);
  }

  setDeutsch(): void {
    this.setActiveLanguage(deutsch);
  }

  setActiveLanguage(lang: Translations): void {
    this.active = lang;
  }
}
