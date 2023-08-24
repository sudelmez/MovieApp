/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import styles from './auth_view.style';
import CustomField from '../../component/field/custom_field';
import ButtonCustom from '../../component/button/custom_button';
import TextButton from '../../component/text_button/text_button';
import { LoginSchema } from '../../service/Yup';

const AuthView = () => {
    const navigation = useNavigation();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleOnSubmit = (values) => {
        console.log(values);
        navigation.navigate('homeTabs', { screen: 'Home' });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleOnSubmit}
        >
            {formikProps => (
                <SafeAreaView style={styles.container}>
                    <Text style={styles.text}>Welcome!</Text>

                    <CustomField
                        hint="Mail"
                        field={formikProps.getFieldProps('email')}
                        form={formikProps}
                        title="Mail"
                    />

                    <CustomField
                        hint="Password"
                        field={formikProps.getFieldProps('password')}
                        form={formikProps}
                        title="Password"
                    />

                    <ButtonCustom
                        title="Log In"
                        onPress={formikProps.handleSubmit}
                    />

                    <TextButton
                        title="Don’t you have an account? Get one!"
                        onPress={() => navigation.navigate('register')}
                    />
                </SafeAreaView>
            )}
        </Formik>
    );
};

export default AuthView;


