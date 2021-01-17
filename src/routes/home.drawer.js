import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MenuDrawerItem from '../components/menuDrawerItem'

import HomeRoutes from './home.routes'
import aboutPage from '../pages/aboutPage'

const HomeDrawerNavigator = createDrawerNavigator();

export default function HomeDrawer() {
	return(		
		<HomeDrawerNavigator.Navigator initialRouteName="home">
			<HomeDrawerNavigator.Screen name="home" component={HomeRoutes} />
			<HomeDrawerNavigator.Screen name="about" component={aboutPage} />
			{/* <HomeDrawerNavigator.Screen name="logout" component={logOutPage}/> */}
			{/* <HomeDrawerNavigator.Screen name="about">
				{(props) => <MenuDrawerItem title="Sobre" {...props} />}
			</HomeDrawerNavigator.Screen> */}
			{/* <HomeDrawerNavigator.Screen >
				{(props) => <MenuDrawerItem title="LogOut" {...props} />}
			</HomeDrawerNavigator.Screen> */}
		</HomeDrawerNavigator.Navigator>
	);
};