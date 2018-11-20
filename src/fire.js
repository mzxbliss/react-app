import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDzKIqlN000WOHy6C113DEEN9Cng8UmQWU",
    authDomain: "acclaim-projecten.firebaseapp.com",
    databaseURL: "https://acclaim-projecten.firebaseio.com",
    projectId: "acclaim-projecten",
    storageBucket: "acclaim-projecten.appspot.com",
    messagingSenderId: "1049046667199"
  };

var fire = firebase.initializeApp(config);
export default fire;
