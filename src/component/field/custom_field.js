/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './custom_field.style';

const CustomField = ({ field = {}, hint, form, setFieldValue, fieldValue, ...props }) => {
    const { name } = field;
    const { touched, errors } = form;

    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                {...field}
                placeholder={hint}
                onChangeText={(text) => {
                    form.handleChange(name)(text);
                    if (name === 'email' || name === 'name') {
                        setFieldValue(text);
                    }
                }}
                onBlur={form.handleBlur(name)}
            />
            {touched[name] && errors[name] && <Text style={styles.errorText}>{errors[name]}</Text>}
        </View>
    );
};


export default CustomField;
