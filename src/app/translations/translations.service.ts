import { Injectable } from '@angular/core';
import { english, Translations } from './translations';
import { BehaviorSubject, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TranslationsService {
  private active: Translations = english;
  private subject = new BehaviorSubject(english);

  subscribe(subscriber): Subscription {
    return this.subject.subscribe(subscriber);
  }

  unsubscribeTranslationsObserver(): void {
    this.subject.unsubscribe();
  }

  getActiveTranslation(): Translations {
    return this.active;
  }

  setActiveLanguage(lang: Translations): void {
    // Publish newly selected translation language
    this.subject.next(lang);
    this.active = lang;
  }
}
