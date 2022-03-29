import {ZumWebPush} from '@zum-front-core/web-push'

const firebaseConfig = {
  apiKey: "AIzaSyBqO9upyfr-lN6m7AoEqube8oVRRzeRAjE",
  authDomain: "web-push-q-7e95a.firebaseapp.com",
  projectId: "web-push-q-7e95a",
  storageBucket: "web-push-q-7e95a.appspot.com",
  messagingSenderId: "246405786805",
  appId: "1:246405786805:web:6e37a76b83dbfafab162fc",
  measurementId: "G-7TF7ZN7Q1B"
};

const onBackgroundMessageHandler = (payload) => {
  console.log(payload)
  const {title, body} = payload.notification;
  const notificationTitle = title;
  const notificationOptions = {
    body,
  };

  self.registration?.showNotification(notificationTitle,
    notificationOptions);
}

ZumWebPush.onBackgroundMessage({firebaseConfig})