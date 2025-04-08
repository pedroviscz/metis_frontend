import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import DinamicInput from './DinamicInput';
import OpenedAndClosedEyeButton from './OpenedAndClosedEyeButton';
import { colors } from '@/src/constants/colors';
import { Person, Lock } from '@/assets/svgs';
import { loginInputStyle as tstyle } from '@/src/styles';
import { TextInputRegularPropsForm } from '@/src/types/TextInputRegularProps';
import { UserForm } from '../interfaces/UserForm';

interface LoginInputProps extends TextInputRegularPropsForm<UserForm> { containerStyle?: ViewStyle; secureTextEntry?: boolean }

const LoginInput = ({ value, setFunction, field, secureTextEntry, containerStyle, ...textInputProps }: LoginInputProps) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const handleChangePasswordVisibility = () => setPasswordVisible(prev => !prev);

    return (
        <View style={{ ...tstyle.containerInput, ...containerStyle }}>
            <View style={{ paddingHorizontal: '3%' }}>
                {!secureTextEntry ? <Person fill={colors.pcian} /> : <Lock fill={colors.pcian} />}
            </View>
            <DinamicInput<UserForm>
                value={value} setFunction={setFunction} field={field}
                style={tstyle.textInput}
                secureTextEntry={secureTextEntry ? !isPasswordVisible : false}
                keyboardType={secureTextEntry ? 'default' : 'email-address'}
                spellCheck={false}
                autoCorrect={false}
                textContentType={secureTextEntry ? 'password' : 'emailAddress'}
                cursorColor={colors.pcian}
                selectionColor={`${colors.pcian}44`}
                multiline={false}
                numberOfLines={1}
                placeholderTextColor={colors.gray}
                {...textInputProps}
            />
            {secureTextEntry ?
                <OpenedAndClosedEyeButton
                    isPasswordVisible={isPasswordVisible}
                    handleChangePasswordVisibility={handleChangePasswordVisibility}
                />
                : null
            }
        </View>
    )
}

export default LoginInput;