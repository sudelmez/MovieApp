/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from './profile_view.style';
import { useSelector } from 'react-redux';

function ProfileView() {
    const mail = useSelector(s => s.email);
    const name = useSelector(s => s.name);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={require('../../res/images/person.jpeg')} style={styles.profileImage} />
            </View>
            <Text style={styles.headline}>{name}</Text>
            <Text style={styles.text}>{mail}</Text>
        </SafeAreaView>
    );
}

export default ProfileView;
