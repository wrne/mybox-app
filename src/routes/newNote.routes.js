import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import NewNotePage from '../pages/NewNotePage';
import NoteDetail from '../components/noteDetail'


import {getDefaultHeader,getScreenRightButtonOption} from './general.stackroutes';

const NewNoteRoutesStack = createStackNavigator();

export default function NewNoteRoutes({ navigation }) {

	return (
		<NewNoteRoutesStack.Navigator screenOptions={getDefaultHeader()}>
			<NewNoteRoutesStack.Screen
				name="NewNotePage"
				component={NewNotePage}
				options={getScreenRightButtonOption()} />
			<NewNoteRoutesStack.Screen name="noteDetail" component={NoteDetail} />
		</NewNoteRoutesStack.Navigator>
	);
};
