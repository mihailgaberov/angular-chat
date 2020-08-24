# Mihail's Chat (Angular)

>_I have written a tutorial about how I did this. You can find it [here](https://mihail-gaberov.eu/) or [here](https://mihail-gaberov.eu)_

An Angular single page chat application (SPA) built with the following technologies:
- Angular (v10.0.0 at the moment of writting)
- RxJS
- Express.js with Socket.io
- SASS
- Angular Testing Library
- Karma/Jasmine

### Screenshots


## Application features:
- Header
  1. Chat tab - blinking when new message is received until is read, i.e. when the user is on Settings page
  2. Settings tab
  3. Unread messages counter
  4. Font Awesome icons
- Chat page
  1. Chat area (includes left aligned and right aligned messages)
  3. Message (text, datetime, left or right depending on if it's received or sent)
  4. Showing nickname only for received message
  4. Message sender - input and button. Input is cleared and focused when button is clicked
  5. Send messages with Ctrl+Enter
  6. Auto scroll to bottom when the chat area is not enough to show all messages
- Settings page
  1. UserProfile component - possibility to change user name
  2. Interface color component - change the color theme of the app
  3. ClockDisplay component - change the time mode 12h or 24h, shown with each message
  4. Send messages with Ctrl+Enter - On/Off
  5. LanguageSwitcher - dropdown menu allowing changing the language of the app (currently English and Deutsch are supported)
  6. Reset button - resets all settings stored to local storage
  
  ### Improvements
   - Add video chat feature.
  
### Demo
:star: [Link to the demo](https://mihail-gaberov.eu) :star:

### Running The App locally

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. Install [npm](https://www.npmjs.com/).
3. From the project folder, execute the following commands:

To install dependencies:
```shell
  npm i
```
To run the client app:

```shell
ng serve  
```
To run the server app:

```shell
  npm run server:watch
```
To run the unit tests:

```shell
ng test
```
To run the e2e tests:

```shell
ng e2e
```
Browse to [http://localhost:4200](http://localhost:4200) and see the running app. In order to test, open it in two different computers,
 or computer and a phone, or two browsers on the same computer (one of it in incognito mode). 
 _If you are running it locally, make sure to change the __host__ variable in Socket.ts (line:28) and its value to match
 your local network address - the one of the computer you are running the server app._ 
 
### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Deploy to Netlify 

### Resources


MIT License

Copyright (c) 2020 Mihail Gaberov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
