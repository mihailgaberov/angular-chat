export interface Translations {
  name: string;
  properties: any;
}

export const english: Translations = {
  name: 'en',
  properties: {
    clockDisplay: 'Clock Display',
    clockModes: {
      hours12: '12 Hours',
      hours24: '24 Hours'
    },
    colors: {
      color1: 'Light',
      color2: 'Dark'
    },
    interfaceColor: 'Interface Color',
    langCode: 'EN',
    langLabel: 'Language',
    languageEN: 'English',
    languageDE: 'Deutsch',
    nav: {
      chatTabLabel: 'Chat',
      settingsTabLabel: 'Settings'
    },
    resetButtonLabel: 'Reset',
    ctrlEnterOptionsTitle: 'Send messages on CTRL+ENTER',
    ctrlEnterSendingOptions: {
      option1: 'On',
      option2: 'Off'
    },
    usernameLabel: 'Username'
  }
};

export const deutsch: Translations = {
  name: 'de',
  properties: {
    clockDisplay: 'Uhrenanzeige',
    clockModes: {
      hours12: '12 Stunden',
      hours24: '24 Stunden'
    },
    colors: {
      color1: 'Licht',
      color2: 'Dunkel'
    },
    interfaceColor: 'Schnittstellenfarbe',
    langLabel: 'Sprache',
    langCode: 'DE',
    languageEN: 'English',
    languageDE: 'Deutsch',
    nav: {
      chatTabLabel: 'Plausch',
      settingsTabLabel: 'Rahmen'
    },
    resetButtonLabel: 'Zurücksetzen',
    ctrlEnterOptionsTitle: 'Senden Sie Nachrichten mit STRG + EINGABE',
    ctrlEnterSendingOptions: {
      option1: 'Ein',
      option2: 'Aus'
    },
    usernameLabel: 'Nutzername'
  }
};
