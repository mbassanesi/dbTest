import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var config = {
  apiKey: "AIzaSyCGJETlXKvnLEgi2cTcDr9HeCdLMMyWZno",
  authDomain: "firestore-f96f8.firebaseapp.com",
  databaseURL: "https://firestore-f96f8.firebaseio.com",
  projectId: "firestore-f96f8",
  storageBucket: "firestore-f96f8.appspot.com",
  messagingSenderId: "148144511667"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
