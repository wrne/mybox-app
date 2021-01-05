import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/loginPage';
import NewUserPage from '../pages/newUserPage';

const AuthStack = createStackNavigator();

const Screens = {
	LOGIN: 'Login',
	ABOUT: 'About',
	NEWUSER: 'NewUser',
	HOME: 'Home'
}

export default function AuthRoutes() {
	return (
		<AuthStack.Navigator screenOptions={styleDefault}>
			<AuthStack.Screen name={Screens.LOGIN} component={LoginPage} options={{ headerShown: false }} />
			<AuthStack.Screen name={Screens.NEWUSER} component={NewUserPage} options={{ title: 'Novo Usuário' }} />
		</AuthStack.Navigator>
	);
};

const styleDefault = {
	headerStyle: { backgroundColor: '#4da8f2' },
	headerTintColor: '#FFF',
	headerTitleStyle: {
		// fontWeight: ''
	}
}
