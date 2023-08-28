/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth';

const firebaseFirestore = firebase.firestore();
const firebaseAuth = firebase.auth();

export const doCreateUser = async (mail, password, username) => {
    try {
        const response = await auth().createUserWithEmailAndPassword(mail, password);
        await firebaseFirestore.collection('users').doc(response.uid).set({
            username,
        });
        console.log(response);
        if (response) {
            console.log(response);
            Alert.alert('Successful SignUp', 'You are successfully signed up!');
        }
    } catch (e) {
        console.error(e.message);
    }
};

export const signIn = async (promps) => {
    try {
        let response = await auth().signInWithEmailAndPassword(promps.mail, promps.password);
        if (response) {
            console.log(response);
            Alert.alert('Successful Login', 'Welcome the App!');
        }
    } catch (e) {
        console.error(e.message);
    }
};