import {Component, OnInit} from '@angular/core';
import {TranslationsService} from '../translations/translations.service';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss']
})
export class ResetButtonComponent implements OnInit {
  public buttonLabel: string;

  constructor(private translationService: TranslationsService) {
    this.buttonLabel = translationService.getActiveTranslation().properties.resetButtonLabel;
  }

  ngOnInit(): void {
  }

}
