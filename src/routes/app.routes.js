import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NotesProvider } from '../contexts/note.context'
// import HomeDrawer from './home.drawer';
import HomeTab from './home.tab';

const AppStack = createStackNavigator();


export default function AppRoutes() {
	
	return (
		<NotesProvider>
			<AppStack.Navigator >
				{/* <AppStack.Screen name='homeDrawer' component={HomeDrawer} options={{ headerShown: false }} /> */}
				<AppStack.Screen name='homeTab' component={HomeTab} options={{ headerShown: false }} />
			</AppStack.Navigator>
		</NotesProvider>
	);
};

const styleDefault = {
	headerStyle: { backgroundColor: '#4da8f2' },
	headerTintColor: '#FFF',
	headerTitleStyle: {
		// fontWeight: ''
	}
}
