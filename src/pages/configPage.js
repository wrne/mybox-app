import React from 'react';
import { StyleSheet, Image, TouchableHighlight, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome';
// import Avatar from '../../assets/user.png';

import { useAuth } from '../contexts/auth.context';
import { theme } from '../theme';

const { colors, metrics } = theme;
export default function configPage() {

	const { user, logOut } = useAuth();

	return (
		<View style={styles.container}>
			<View style={styles.userInfo}>
				<View style={styles.avatarContainer}>
					<Image style={styles.avatar} source={user.photoURL || require('../../assets/user.png')} ></Image>
				</View>
				<View style={styles.nameUser}>
					<Text style={styles.nameUserText}>{user.displayName || user.email}</Text>
					<TouchableOpacity onPress={() => { alert('ação !') }}>
						<Icon size={20} name="edit" style={{ color: colors.mainB, padding: 10 }} />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.options}>
				<TouchableHighlight underlayColor={colors.gray} style={styles.listOption} onPress={() => { alert('opcao Conta') }}>
					<Text style={styles.editOptionText}>Conta</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor={colors.gray} onPress={() => { alert('opcao Sobre') }} style={styles.listOption}>
					<Text style={styles.editOptionText}>Sobre</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor={colors.gray} onPress={logOut} style={styles.listOption}>
					<IconFA name="sign-out" size={36} style={[styles.menuButton, { color: colors.mainB }]} />
				</TouchableHighlight>

				{/* <View style={styles.logoutOption}>
					<TouchableHighlight onPress={logOut} >
						<IconFA name="sign-out" size={36} style={[styles.menuButton, { color: colors.mainB }]} />
					</TouchableHighlight>
				</View> */}
			</View>
		</View>
	)

}

const styles = StyleSheet.create({
	container: {
		width: metrics.width100,
		flex: 1,
		alignItems: 'center'
	},
	avatarContainer: {
		alignItems: 'center',
		padding: metrics.padding,
		marginTop: 30,
		margin: metrics.margin,
	},
	avatar: {
		height: 250,
		width: 250,
	},
	nameUser: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		// paddingVertical: metrics.paddingVertical,
	},
	nameUserText: {
		fontSize: 22,
		fontWeight: "bold",
		color: colors.dark,
	},
	options: {
		flex: 1,
		width: '90%',
		padding: 20,
		marginTop: 30,
		marginBottom: metrics.margin,
		alignItems: 'center',
	},
	listOption: {
		width: '100%',
		padding: metrics.padding,
		margin: 7,
		alignItems: 'center',
		// borderWidth: 1,
		borderColor: colors.secundaryA,
		borderRadius: metrics.borderRadius,
		backgroundColor: colors.light,

	},
	editOptionText: {
		fontSize: 22,
	}
})