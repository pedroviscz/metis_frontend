import React from 'react';
import { View } from 'react-native';
import { loginStyle as tstyle } from '@/src/styles';
import LoginInput from './LoginInput';
import { UserForm } from '../interfaces/UserForm';

interface LoginFormProps {
    user: UserForm;
    handleChangeText: (value: string, field: keyof UserForm) => void;
}

const LoginForm = ({ user, handleChangeText }: LoginFormProps) => {
    return (
        <>
            <LoginInput
                value={user.email}
                field="email"
                setFunction={handleChangeText}
                containerStyle={{ marginBottom: '10%' }}
                placeholder='Digite seu email'
            />
            <LoginInput
                value={user.password}
                field="password"
                setFunction={handleChangeText}
                secureTextEntry={true}
                placeholder='Digite sua senha'
            />
        </>
    );
};

export default LoginForm;