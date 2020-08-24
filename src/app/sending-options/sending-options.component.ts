import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../translations/translations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sending-options',
  templateUrl: './sending-options.component.html',
  styleUrls: ['./sending-options.component.scss']
})
export class SendingOptionsComponent implements OnInit {
  public ctrlEnterOptionsTitle: string;
  public option1: string;
  public option2: string;
  private translationSubscription: Subscription;

  constructor(private translationService: TranslationsService) {
  }

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.ctrlEnterOptionsTitle = data.properties.ctrlEnterOptionsTitle;
      this.option1 = data.properties.ctrlEnterSendingOptions.option1;
      this.option2 = data.properties.ctrlEnterSendingOptions.option2;
    });
  }

}
