import { ZumWebPush } from '@zum-front-core/web-push';

const firebaseConfig = {
  apiKey: 'AIzaSyBzkR_2nqrTsqKIg7Hp0nXhlw_jNV2fXk8',
  authDomain: 'zum-app-d6b3d.firebaseapp.com',
  databaseURL: 'https://zum-app-d6b3d.firebaseio.com',
  projectId: 'zum-app-d6b3d',
  storageBucket: 'zum-app-d6b3d.appspot.com',
  messagingSenderId: '1054822071827',
  appId: '1:1054822071827:web:ee64270513e07488ac09e6',
  measurementId: 'G-7FJYR6590G',
};

const vapidKey = 'BFvqxAtemDbyY2R-PqfgjV-GTavbsZojGR2z5GERMog_twbXN5lWKpZXXlHvWbTFbOo2jMYmmb1zARLwI7sE6Z8';

const onPermissionGranted = (token) => {
  console.log(token);
};

const onMessageHandler = (payload) => {
  new Notification(payload.notification?.title || '');
};

ZumWebPush.onForegroundMessage({ firebaseConfig, vapidKey, onPermissionGranted });
