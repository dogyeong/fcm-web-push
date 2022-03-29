import { ZumWebPush } from '@zum-front-core/web-push'

const firebaseConfig = {
  apiKey: "AIzaSyBqO9upyfr-lN6m7AoEqube8oVRRzeRAjE",
  authDomain: "web-push-q-7e95a.firebaseapp.com",
  projectId: "web-push-q-7e95a",
  storageBucket: "web-push-q-7e95a.appspot.com",
  messagingSenderId: "246405786805",
  appId: "1:246405786805:web:6e37a76b83dbfafab162fc",
  measurementId: "G-7TF7ZN7Q1B"
};

const vapidKey = 'BI5j1hNEuBTf4askindrFRZGZ0eKpDFNT6b328LY1v4xvXXl469R1T5k6melv3mfjbmiTReidH1CtPitxEA91A8'

const onPermissionGranted = (token) => {
  console.log(token)
}

const onMessageHandler = (payload) => {
  new Notification(payload.notification?.title || '');
}

ZumWebPush.onForegroundMessage({ firebaseConfig, vapidKey, onPermissionGranted })