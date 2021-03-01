import React from 'react';
import { StyleSheet, Image, View, Button, TouchableHighlight, Text, Alert } from 'react-native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import logoWhite from '../../assets/my-box-logo-white.png'

import { useAuth } from '../contexts/auth.context'
import MyNotesPage from '../pages/myNotesPage';
import NoteDetail from '../components/noteDetail'

import { theme } from '../theme'
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/native';
import { useNotes } from '../contexts/note.context';

const { colors, metrics } = theme;

const HomeRoutesStack = createStackNavigator();

export default function HomeRoutes({ navigation }) {

	const { logOut, user } = useAuth();
	
	const styleDefault = {
		title: user.displayName && <Text style={styles.logoText}>Box do {user.displayName}</Text> || <Image source={logoWhite} style={styles.logo} />,
		headerStyle: { backgroundColor: colors.dark },
		headerTintColor: colors.light,
		headerTitleStyle: {
			// alignItems: 'center',		
			height: 52,
		}
	}


	function handleLogOut() {

		logOut();

	}

	return (
		<HomeRoutesStack.Navigator screenOptions={styleDefault}>
			<HomeRoutesStack.Screen
				name="myNotesPage"
				component={MyNotesPage}
				options={{
					headerRight: () => (
						<View style={styles.buttonsArea}>
							<TouchableHighlight onPress={handleLogOut} >
								<Icon name="sign-out" size={18} style={styles.menuButton} />
							</TouchableHighlight>
						</View>
					),
				}} />
			<HomeRoutesStack.Screen name="noteDetail" component={NoteDetail} />
		</HomeRoutesStack.Navigator>
	);
};

const styles = StyleSheet.create({

	logo: {
		width: 100,
		height: 35,
	},
	logoText: {
		fontFamily: 'Lastica',
		fontSize: 20,
	},
	buttonsArea: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	menuButton: {
		color: colors.light,
		// height: 40,
		margin: metrics.margin,
		padding: metrics.padding
	}

})