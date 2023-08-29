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
import { doCreateUser } from '../../service/firebase/register';

function RegisterView() {
    const navigation = useNavigation();

    const fields = [
        { name: 'name', title: 'Name', hint: 'Name', key: 'a' },
        { name: 'lastname', title: 'Lastname', hint: 'Lastname', key: 'b' },
        { name: 'email', title: 'Mail', hint: 'Mail', key: 'c' },
        { name: 'password', title: 'Password', hint: 'Password', key: 'd' },
    ];

    const FormContent = ({ formikProps }) => (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Welcome Again!</Text>
            {fields.map(field => (
                <CustomField
                    key={field.key}
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
                console.log(values);
                await doCreateUser(values.email, values.password, values.name);
                navigation.navigate('auth');
            }}
        >
            {formikProps => <FormContent formikProps={formikProps} />}
        </Formik>
    );
}

export default RegisterView;
