import {Component, OnInit} from '@angular/core';
import {ThemeService} from 'src/app/theme/theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
  }

  setLightTheme(): void {
    this.themeService.setLightTheme();
  }

  setDarkTheme(): void {
    this.themeService.setDarkTheme();
  }
}
