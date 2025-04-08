import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { loginStyle as tstyle } from '@/src/styles';
import { Link } from 'expo-router';
import LoginForm from '@/src/components/LoginForm';
import { UserForm } from '@/src/interfaces/UserForm';
import BottomSpot from '@/assets/svgs/BottomSpot';
import TopSpot from '@/assets/svgs/TopSpot';
import Girl from '@/assets/svgs/Girl';

const Login = () => {
    const [user, setUser] = useState<UserForm>({ email: '', password: '' });

    const handleChangeText = (value: string, field: keyof UserForm) =>
        setUser(prev => ({ ...prev, [field]: value }));

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={tstyle.container}>
            <BottomSpot width='300' height='400' viewBox='0 0 400 100' style={tstyle.bottomSpot} />
            <TopSpot height='200' width='300' viewBox='0 0 300 200' style={tstyle.topSpot} />
            <Girl width='100' height='200' viewBox='0 0 100 200' style={tstyle.girlSvg} />
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
                <View style={tstyle.containerTop}>
                    <View style={tstyle.conatinerIntro}>
                        <Text style={tstyle.title}>Bem-vindo!</Text>
                        <Text style={tstyle.subtitle}>Realize agora seu login!</Text>
                    </View>
                    <View style={tstyle.containerForm}>
                        <LoginForm user={user} handleChangeText={handleChangeText} />
                    </View>
                </View>
                <View style={tstyle.containerButtons}>
                    <Link href="/(student)/(tabs)" asChild>
                        <TouchableOpacity style={tstyle.button} activeOpacity={1}>
                            <Text style={tstyle.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </Link>
                    <Link href='/' asChild>
                        <TouchableOpacity style={{ flex: 0, alignSelf: 'stretch' }} activeOpacity={1}>
                            <Text style={tstyle.forgotPassLink}>Alterar senha</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Login;