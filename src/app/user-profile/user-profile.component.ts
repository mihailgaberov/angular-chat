import { Component, OnInit } from '@angular/core';
import {TranslationsService} from '../translations/translations.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public usernameLabel: string;

  constructor(private translationService: TranslationsService) {
    this.usernameLabel = translationService.getActiveTranslation().properties.usernameLabel;
  }

  ngOnInit(): void {
  }

}
