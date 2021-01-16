import React, { useContext, useState, useEffect } from 'react';
import { TouchableHighlight, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '../contexts/auth.context'
import { NotesContext } from '../contexts/note.context'
import { NotesProvider } from '../contexts/note.context'
import NoteContainer from '../containers/notes.container'

export default function homePage({ navigation }) {

	const { logOut } = useContext(AuthContext);

	function handleLogOut() {

		logOut();

	}

	function handleDetail() {

	}

	return (
		<NotesProvider>
			<KeyboardAvoidingView style={styles.background}>
				<StatusBar></StatusBar>
				{/* <ScrollView style={styles.container}> */}
				<View style={styles.container}>
					<NoteContainer navigation={navigation}/>
				</View>
				<View style={styles.containerFields}>
					<TouchableHighlight onPress={() => { navigation.navigate('About') }}>
						<Text>Sobre</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={handleLogOut}>
						<Text>Log Out</Text>
					</TouchableHighlight>
				</View>
				<StatusBar style="auto" />
			</KeyboardAvoidingView>
		</NotesProvider>
	)
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#e8e8e8',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerLogo: {
		flex: 1,
		justifyContent: 'center'
	},
	container: {
		flex:1,
		alignItems: 'center',
		width: '100%'
	},
	containerFields: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%'
	},
	textAcessar: {
		color: '#FFF',
		fontSize: 18
	},
});