import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'chat', component: ChatPageComponent },
  { path: 'settings', component: SettingsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
