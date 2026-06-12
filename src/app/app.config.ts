import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
// Update |v
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
// Update |v
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
// Update |v
import { HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // Update |v
  // imports: [
  //   provideFirebaseApp(() => initializeApp(environment.firebase)),
  // ],
  providers: [
    // importProvidersFrom(
    //   provideFirebaseApp(() => initializeApp(environment.firebase)),
    //   provideFirestore(() => getFirestore()),
    //   provideAuth(() => getAuth()),
    //   provideFunctions(() => getFunctions()),
    //   provideStorage(() => getStorage()),
    //   provideMessaging(() => getMessaging())
    // ),
    // Update |v
    provideZoneChangeDetection({ eventCoalescing: true}),
    provideRouter(routes), 
    // provideFirebaseApp(() => initializeApp({"projectId":"fir-demo-5a5e9","appId":"1:884166110716:web:5c8bda928ac375e12f9679","storageBucket":"fir-demo-5a5e9.firebasestorage.app","apiKey":"AIzaSyAC8ZV66C0biakn-xsB6x2zBua3Somb0qw","authDomain":"fir-demo-5a5e9.firebaseapp.com","messagingSenderId":"884166110716","projectNumber":"884166110716","version":"2"})),
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()),
    provideHttpClient()
  ],
};
