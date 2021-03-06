import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/loginPage';
import NewUserPage from '../pages/newUserPage';

import {theme} from '../theme'
const {colors} = theme;

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
	return (
		<AuthStack.Navigator screenOptions={styleDefault}>
			<AuthStack.Screen name='login' component={LoginPage} options={{ headerShown: false }} />
			<AuthStack.Screen name='newuser' component={NewUserPage} options={{ title: 'Novo Usuário' }} />
		</AuthStack.Navigator>
	);
};

const styleDefault = {
	headerStyle: { backgroundColor: colors.secundaryB },
	headerTintColor: '#FFF',
	headerTitleStyle: {
		// fontWeight: ''
	}
}
