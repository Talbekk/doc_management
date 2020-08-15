import firebase from 'firebase'
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDlGBdW_YwPN3l7-TiRZeiLn8hvK0_8e-U",
    authDomain: "doc-management-tool.firebaseapp.com",
    databaseURL: "https://doc-management-tool.firebaseio.com",
    projectId: "doc-management-tool",
    storageBucket: "doc-management-tool.appspot.com",
    messagingSenderId: "195494875029",
    appId: "1:195494875029:web:3354ec71bb2193e038309c",
    measurementId: "G-K47EV4GT4Z"
};
const fire = firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.database();
export const storage = firebase.storage();
export default fire;