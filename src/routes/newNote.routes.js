import React from 'react';
import { StyleSheet, Image, View, Button, TouchableHighlight, Text, Alert } from 'react-native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import logoWhite from '../../assets/my-box-logo-white.png'

import { useAuth } from '../contexts/auth.context'
import NewNotePage from '../pages/NewNotePage';
import NoteDetail from '../components/noteDetail'

import { theme } from '../theme'
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/native';
import { useNotes } from '../contexts/note.context';

const { colors, metrics } = theme;

const NewNoteRoutesStack = createStackNavigator();

export default function NewNoteRoutes({ navigation }) {

	const { logOut } = useAuth();

	function handleLogOut() {

		logOut();

	}

	function goBack(navigation) {

		//TODO: Identificar pq não volta pelo método customizado

		const { inicialNote, setNoteDetail } = useNotes();
		Alert.alert('Voltando...', 'Voltando do detalhes da nota')
		console.log('Voltando customizado');
		setNoteDetail(inicialNote);
		navigation.goBack();

	}

	return (
		<NewNoteRoutesStack.Navigator screenOptions={styleDefault}>
			<NewNoteRoutesStack.Screen
				name="NewNotePage"
				component={NewNotePage}
				options={{
					headerLeft: (props) => (
						<HeaderBackButton {...props} onPress={()=> goBack(navigation)} />
					),
					headerRight: () => (
						<View style={styles.buttonsArea}>
							<TouchableHighlight onPress={handleLogOut} >
								<Icon name="sign-out" size={18} style={styles.menuButton} />								
							</TouchableHighlight>
						</View>

					),
				}} />
			<NewNoteRoutesStack.Screen name="noteDetail" component={NoteDetail} />
		</NewNoteRoutesStack.Navigator>
	);
};

const styles = StyleSheet.create({

	logo: {
		width: 100,
		height: 35,
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
const styleDefault = {
	title: <Image source={logoWhite} style={styles.logo} />,
	headerStyle: { backgroundColor: colors.dark },
	headerTintColor: colors.light,
	headerTitleStyle: {
		// alignItems: 'center',		
		height: 52,
	}
}


function customHeader({ scene, previous, navigation }) {
	const { options } = scene.descriptor;
	const title =
		options.headerTitle !== undefined
			? options.headerTitle
			: options.title !== undefined
				? options.title
				: scene.route.name;

	return (
		<Header
			title={title}
			leftButton={
				previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
			}
			style={options.headerStyle}
		/>
	);
};