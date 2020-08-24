import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationsService } from '../translations/translations.service';
import { readRecord, storeToLocalStorage } from '../utilities/localStorageService';
import { CLOCK_MODES } from '../enums/clock-modes';

@Component({
  selector: 'app-clock-mode-selector',
  templateUrl: './clock-mode-selector.component.html',
  styleUrls: ['./clock-mode-selector.component.scss']
})
export class ClockModeSelectorComponent implements OnInit {
  public clockDisplay: string;
  public hours12: string;
  public hours24: string;
  public selectedClockMode: boolean;
  private translationSubscription: Subscription;

  constructor(private translationService: TranslationsService) {
    this.selectedClockMode = readRecord('clockMode') === CLOCK_MODES.hours12;
  }

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.clockDisplay = data.properties.clockDisplay;
      this.hours12 = data.properties.clockModes.hours12;
      this.hours24 = data.properties.clockModes.hours24;
    });
  }

  setClockModeHours12(): void {
    storeToLocalStorage('clockMode', CLOCK_MODES.hours12);
  }

  setClockModeHours24(): void {
    storeToLocalStorage('clockMode', CLOCK_MODES.hours24);
  }
}
