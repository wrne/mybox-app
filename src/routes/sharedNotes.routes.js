import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MySharedNotesPage from '../pages/notesSharedWithMePage';
import NoteDetail from '../components/noteDetail'

import {getDefaultHeader,getScreenRightButtonOption} from './general.stackroutes';

const HomeRoutesStack = createStackNavigator();

export default function SharedRoutes({ navigation }) {

	return (
		<HomeRoutesStack.Navigator screenOptions={getDefaultHeader()}>
			<HomeRoutesStack.Screen
				name="ShareWithMe"
				component={MySharedNotesPage}
				options={getScreenRightButtonOption()} />
			<HomeRoutesStack.Screen name="noteDetail" component={NoteDetail} />
		</HomeRoutesStack.Navigator>
	);
};
