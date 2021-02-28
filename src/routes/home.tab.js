import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import HomeRoutes from './home.routes'
import ConfigPage from '../pages/configPage'
import NewNotePage from '../pages/newNotePage'

import {theme} from '../theme'

const {colors} = theme;

const HomeTabBotton = createBottomTabNavigator();

export default function HomeTab() {
	return (

		<HomeTabBotton.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;

					switch (route.name) {
						case 'myNotes':
							iconName = 'layers';
							break;
						case 'ShareWithMe':
							iconName = 'users';
							break;
						case 'newNote':
							iconName = 'plus-square';
							break;
						case 'search':
							iconName = 'search';
							break;
						case 'config':
							iconName = 'settings';
							break;
						default:
							iconName = 'circle';
							break;
					}

					return <Icon name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: colors.mainB,
				inactiveTintColor: '#777',
				activeBackgroundColor: colors.dark,
				inactiveBackgroundColor: colors.dark,
				showLabel: false,
				style:{
					height: 60
				}
			}}
		>
			<HomeTabBotton.Screen name="myNotes" component={HomeRoutes} />
			<HomeTabBotton.Screen name="ShareWithMe" component={HomeRoutes} />			
			<HomeTabBotton.Screen name="newNote" component={NewNotePage} />
			<HomeTabBotton.Screen name="search" component={HomeRoutes} />
			<HomeTabBotton.Screen name="config" component={ConfigPage} />
		</HomeTabBotton.Navigator>

	);
}