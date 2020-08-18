import { Component, OnInit } from '@angular/core';
import {TranslationsService} from '../translations/translations.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public usernameLabel: string;
  private translationSubscription: Subscription;

  constructor(private translationService: TranslationsService) {
    this.usernameLabel = translationService.getActiveTranslation().properties.usernameLabel;
  }

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.usernameLabel = data.properties.usernameLabel;
    });
  }

}
