import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js'
import { getMessaging, getToken } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-messaging.js'

const firebaseConfig = {
  apiKey: "AIzaSyBmRsOdgQekomDaTdxqBqwcvylDCwaUJTU",
  authDomain: "fcm-test-b5211.firebaseapp.com",
  projectId: "fcm-test-b5211",
  storageBucket: "fcm-test-b5211.appspot.com",
  messagingSenderId: "518072534048",
  appId: "1:518072534048:web:1a1b3c72b7392fde1f2845",
  measurementId: "G-5LTHB5G95C"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

getToken(messaging, { vapidKey: 'BAbDXUGjCdZaEaRybXKwY3S1zt8eJcjV6dJX7qtzPZweeZfU5BHzcreIsqUInRSfTl1Fy9kyu30jsDC2pbZvDeg' })
  .then((currentToken) => {
    if (currentToken) {
      // token을 서버로 보내야 함
      console.log(currentToken);
    } else {
      // 권한 거부한 상태
      console.log('No registration token available. Request permission to generate one.')
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    console.log(err)
  });

messaging.onMessageHandler = (payload) => {
  if (!'Notification' in window) return

  if (Notification.permission !== "granted") return

  new Notification(payload.notification.title);
};