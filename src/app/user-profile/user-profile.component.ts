import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../translations/translations.service';
import { Subscription } from 'rxjs';
import { readRecord, storeToLocalStorageDebounced } from '../utilities/localStorageService';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public usernameLabel: string;
  public username: string = readRecord('username') || 'guest0001';
  private translationSubscription: Subscription;

  constructor(private translationService: TranslationsService) {
    this.usernameLabel = translationService.getActiveTranslation().properties.usernameLabel;
  }

  ngOnInit(): void {
    this.translationSubscription = this.translationService.subscribe((data) => {
      this.usernameLabel = data.properties.usernameLabel;
    });
  }

  changeUserName(e): void {
    storeToLocalStorageDebounced('username', e.currentTarget.value);
  }
}
