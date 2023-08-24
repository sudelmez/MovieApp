/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './text_button.style'; // Uygun yolu belirtin

const TextButton = (props) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={styles.buttonText}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export default TextButton;
