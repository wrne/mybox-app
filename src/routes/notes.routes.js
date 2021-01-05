import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotesContainer  from '../containers/notes.container';
import NoteDetail  from '../components/noteDetail';

const AppStack = createStackNavigator();

export default function NoteRoutes() {
	return (
		<AppStack.Navigator screenOptions={styleDefault}>
			<AppStack.Screen name='noteDetail' component={NoteDetail} options={{ title: 'Nota' }} />
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
