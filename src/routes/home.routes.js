import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import homePage from '../pages/homePage';
import noteDetail from '../components/noteDetail'

const HomeRoutesStack = createStackNavigator();

export default function HomeRoutes() {
	return (
		<HomeRoutesStack.Navigator screenOptions={styleDefault}>
			<HomeRoutesStack.Screen name="home" component={homePage} options={{title: "Minhas notas"}}/>
			<HomeRoutesStack.Screen name="noteDetail" component={noteDetail} />
		</HomeRoutesStack.Navigator>
	);
};

const styleDefault = {
	headerStyle: { backgroundColor: '#4da8f2' },
	headerTintColor: '#FFF',
	headerTitleStyle: {
		// fontWeight: ''
	}
}
