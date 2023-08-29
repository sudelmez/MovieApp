/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import styles from './auth_view.style';
import CustomField from '../../component/field/custom_field';
import ButtonCustom from '../../component/button/custom_button';
import TextButton from '../../component/text_button/text_button';
import { LoginSchema } from '../../service/Yup';
import { useDispatch } from 'react-redux';

const AuthView = () => {
    const navigation = useNavigation();
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
        name:'',
    };

    const handleOnSubmit = (values) => {
        console.log(values);
        navigation.navigate('homeTabs', { screen: 'Home' });
    };

    const handleAdd = () => {
        console.log(mail);
        dispatch({ type: 'Add_User', payload: { email: mail,name:name } });
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
                        hint="Name"
                        field={formikProps.getFieldProps('name')}
                        form={formikProps}
                        title="Name"
                        setFieldValue={setName}
                        fieldValue={mail}
                        key={'e'}
                    /><CustomField
                        hint="Mail"
                        field={formikProps.getFieldProps('email')}
                        form={formikProps}
                        title="Mail"
                        setFieldValue={setMail}
                        fieldValue={mail}
                        key={'f'}
                    />

                    <CustomField
                        hint="Password"
                        field={formikProps.getFieldProps('password')}
                        form={formikProps}
                        title="Password"
                        key={'g'}
                    />

                    <ButtonCustom
                        title="Log In"
                        onPress={() => {
                            formikProps.handleSubmit();
                            handleAdd();
                        }}
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


