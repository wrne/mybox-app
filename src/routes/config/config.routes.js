import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import ConfigPage from '../../pages/configPage';
import AboutPage from '../../pages/aboutPage';
import AccountPage from '../../pages/accountPage';

import {getDefaultHeader,getScreenRightButtonOption} from '../general.stackroutes';


const ConfigRoutesStack = createStackNavigator();

export default function configRoutes({ navigation }) {


	return (
		<ConfigRoutesStack.Navigator screenOptions={getDefaultHeader()}>
			<ConfigRoutesStack.Screen
				name="config"
				component={ConfigPage}
				options={getScreenRightButtonOption()} />
			<ConfigRoutesStack.Screen name="about" component={AboutPage} />
			<ConfigRoutesStack.Screen name="account" component={AccountPage} />
		</ConfigRoutesStack.Navigator>
	);
};
