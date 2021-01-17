import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutPage from '../pages/aboutPage';
// import HomePage from '../pages/homePage';
import NoteDetail  from '../components/noteDetail';
import HomeDrawer from './home.drawer';

const AppStack = createStackNavigator();


export default function AppRoutes() {
	return (
		<AppStack.Navigator screenOptions={styleDefault}>			
			<AppStack.Screen name='homeDrawer' component={HomeDrawer} options={{ headerShown: false }}/>
			{/* <AppStack.Screen name='noteDetail' component={NoteDetail} options={{ title: 'Nota' }} />
			<AppStack.Screen name='About' component={AboutPage} options={{ title: 'Sobre' }} /> */}
		</AppStack.Navigator>
	);
};

const styleDefault = {
	headerStyle: { backgroundColor: '#4da8f2' },
	headerTintColor: '#FFF',
	headerTitleStyle: {
		// fontWeight: ''
	}
}
