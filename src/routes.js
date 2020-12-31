import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/loginPage';
import AboutPage from './pages/aboutPage';
import NewUserPage from './pages/newUserPage';
import HomePage from './pages/homePage';

const Stack = createStackNavigator();

export const Screens = {
	LOGIN: 'Login',
	ABOUT: 'About',
	NEWUSER: 'NewUser',
	HOME: 'Home'
}

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={styleDefault}>
				<Stack.Screen name={Screens.LOGIN} component={LoginPage} options={{ headerShown: false }} />
				<Stack.Screen name={Screens.ABOUT} component={AboutPage} options={ {title: 'Sobre'} } />
				<Stack.Screen name={Screens.NEWUSER} component={NewUserPage} options={{title: 'Novo Usuário'}} />
				<Stack.Screen name={Screens.HOME} component={HomePage} options={{title: 'Home'}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styleDefault = {
	headerStyle: { backgroundColor: '#4da8f2' }, 
	headerTintColor: '#FFF',
	headerTitleStyle:{
		// fontWeight: ''
	}
}
