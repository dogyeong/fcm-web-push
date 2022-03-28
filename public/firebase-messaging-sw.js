importScripts('https://www.gstatic.com/firebasejs/9.6.8/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.6.8/firebase-messaging-compat.js')

const firebaseConfig = {
  apiKey: "AIzaSyBmRsOdgQekomDaTdxqBqwcvylDCwaUJTU",
  authDomain: "fcm-test-b5211.firebaseapp.com",
  projectId: "fcm-test-b5211",
  storageBucket: "fcm-test-b5211.appspot.com",
  messagingSenderId: "518072534048",
  appId: "1:518072534048:web:1a1b3c72b7392fde1f2845",
  measurementId: "G-5LTHB5G95C"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler = (payload) => {
  // console.log(payload)
  // self.registration.showNotification('title!', { body: 'BODY!' });
  new Notification(payload.notification.title)
}