import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../translations/translations.service';
import { readRecord, storeToLocalStorage } from '../utilities/localStorageService';
import { Subscription } from 'rxjs';
import { SENDING_OPTIONS } from '../enums/sending-options';

@Component({
  selector: 'app-sending-options',
  templateUrl: './sending-options.component.html',
  styleUrls: ['./sending-options.component.scss']
})
export class SendingOptionsComponent implements OnInit {
  public ctrlEnterOptionsTitle: string;
  public option1: string;
  public option2: string;
  public selectedSendingOptions: boolean;
  private translationSubscription: Subscription;

  constructor(private translationService: TranslationsService) {
    this.selectedSendingOptions = readRecord('ctrlEnterSending') === SENDING_OPTIONS.CTRL_ENTER_ON;
  }

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.ctrlEnterOptionsTitle = data.properties.ctrlEnterOptionsTitle;
      this.option1 = data.properties.ctrlEnterSendingOptions.option1;
      this.option2 = data.properties.ctrlEnterSendingOptions.option2;
    });
  }

  setCtrlEnterOn(): void {
    storeToLocalStorage('ctrlEnterSending', SENDING_OPTIONS.CTRL_ENTER_ON);
  }

  setCtrlEnterOff(): void {
    storeToLocalStorage('ctrlEnterSending', SENDING_OPTIONS.CTRL_ENTER_OFF);
  }
}
