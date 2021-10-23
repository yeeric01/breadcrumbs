import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyA0cy9Tb2UBNRNjI3x6awQFlWBmrWo_LJU",
    authDomain: "breadcrumbs-f471d.firebaseapp.com",
    projectId: "breadcrumbs-f471d",
    storageBucket: "breadcrumbs-f471d.appspot.com",
    messagingSenderId: "1030990158468",
    appId: "1:1030990158468:web:264c25522cc904424800d1",
    measurementId: "G-9GXHSZJ6YD"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);