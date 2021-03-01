import React from 'react';
import { StyleSheet, Image, View, Button, TouchableHighlight, Text, Alert } from 'react-native';
import logoWhite from '../../assets/my-box-logo-white.png'
import { useAuth } from '../contexts/auth.context'
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../theme'
const { colors, metrics } = theme;



export function getDefaultHeader() {

	const { user } = useAuth();

	const headerDefault = {
		title: user.displayName && <Text style={styles.logoText}>Box do {user.displayName}</Text> || <Image source={logoWhite} style={styles.logo} />,
		headerStyle: { backgroundColor: colors.dark },
		headerTintColor: colors.light,
		headerTitleStyle: {
			// alignItems: 'center',		
			height: 52,
		}
	}

	return headerDefault
}

export function getScreenRightButtonOption() {

	const { logOut } = useAuth();

	function handleLogOut() {
		logOut();
	}

	const options = {
		headerRight: () => (
			<View style={styles.buttonsArea}>
				<TouchableHighlight onPress={handleLogOut} >
					<Icon name="sign-out" size={18} style={styles.menuButton} />
				</TouchableHighlight>
			</View>
		)
	}

	return options
}

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