/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './register_view.style';
import CustomField from '../../component/field/custom_field';
import ButtonCustom from '../../component/button/custom_button';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { SignupSchema } from '../../service/Yup';
import { doCreateUser } from '../../service/auth_service/register.js';

function RegisterView() {
    const navigation = useNavigation();

    const fields = [
        { name: 'name', title: 'Name', hint: 'Name' },
        { name: 'lastname', title: 'Lastname', hint: 'Lastname' },
        { name: 'email', title: 'Mail', hint: 'Mail' },
        { name: 'password', title: 'Password', hint: 'Password' },
    ];

    const FormContent = ({ formikProps }) => (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Welcome Again!</Text>
            {fields.map(field => (
                <CustomField
                    key={field.name}
                    hint={field.hint}
                    field={formikProps.getFieldProps(field.name)}
                    form={formikProps}
                    title={field.title}
                />
            ))}
            <ButtonCustom title="Save" onPress={formikProps.handleSubmit} />
        </SafeAreaView>
    );

    return (
        <Formik
            initialValues={{ email: '', password: '', name: '', lastname: '' }}
            validationSchema={SignupSchema}
            onSubmit={async values => {
                try {
                    await doCreateUser(values.email, values.password, values.name);
                    console.log('User created successfully:', values);
                    navigation.navigate('auth');
                } catch (error) {
                    console.error('User creation error:', error);
                }
            }}
        >
            {formikProps => <FormContent formikProps={formikProps} />}
        </Formik>
    );
}

export default RegisterView;
