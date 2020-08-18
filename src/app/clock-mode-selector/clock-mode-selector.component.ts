import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {TranslationsService} from '../translations/translations.service';

@Component({
  selector: 'app-clock-mode-selector',
  templateUrl: './clock-mode-selector.component.html',
  styleUrls: ['./clock-mode-selector.component.scss']
})
export class ClockModeSelectorComponent implements OnInit {
  public clockDisplay: string;
  public hours12: string;
  public hours24: string;
  private translationSubscription: Subscription;

  constructor(private translationService: TranslationsService) { }

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.clockDisplay = data.properties.clockDisplay;
      this.hours12 = data.properties.clockModes.hours12;
      this.hours24 = data.properties.clockModes.hours24;
    });
  }

}
