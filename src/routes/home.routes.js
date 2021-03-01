import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyNotesPage from '../pages/myNotesPage';
import NoteDetail from '../components/noteDetail'

import {getDefaultHeader,getScreenRightButtonOption} from './general.stackroutes';

const HomeRoutesStack = createStackNavigator();

export default function HomeRoutes({ navigation }) {

	function handleLogOut() {

		logOut();

	}

	return (
		<HomeRoutesStack.Navigator screenOptions={getDefaultHeader()}>
			<HomeRoutesStack.Screen
				name="myNotesPage"
				component={MyNotesPage}
				options={getScreenRightButtonOption()} />
			<HomeRoutesStack.Screen name="noteDetail" component={NoteDetail} />
		</HomeRoutesStack.Navigator>
	);
};
