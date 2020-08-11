import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { ClockModeSelectorComponent } from './clock-mode-selector/clock-mode-selector.component';
import { SendingOptionsComponent } from './sending-options/sending-options.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChatPageComponent,
    SettingsPageComponent,
    UserProfileComponent,
    ThemeSelectorComponent,
    ClockModeSelectorComponent,
    SendingOptionsComponent,
    LanguageSelectorComponent,
    ResetButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
