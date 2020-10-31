import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../translations/translations.service';
import { Subscription } from 'rxjs';
import { clearAll } from '../utilities/localStorageService';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss']
})
export class ResetButtonComponent implements OnInit {
  public buttonLabel: string;
  private translationSubscription: Subscription;

  constructor(private translationService: TranslationsService) {
  }

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.buttonLabel = data.properties.resetButtonLabel;
    });
  }

  onReset(): void {
    clearAll();
  }
}
