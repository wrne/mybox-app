import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight, StatusBar, Alert } from 'react-native';

import { useAuth } from '../contexts/auth.context';
import { theme } from '../theme'

const { colors, metrics } = theme;

export default function accountPage({ navigation }) {

	const { updateUser } = useAuth();

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	function handleUpdateUser() {

		updateUser({name, phone})

	}

	function handleGoBack() {
		navigation.goBack()
	}

	return (
		<View style={styles.background}>

			<View style={styles.titleContainer}>
				<Text style={styles.title}>Informe seus dados:</Text>
			</View>
			<View style={{ width: '100%', alignItems: 'center' }}>
				<KeyboardAvoidingView style={styles.containerFields} >
					<TextInput style={styles.textInput} onChangeText={(t) => { setName(t) }} placeholder="Nome" ></TextInput>
					<TextInput style={styles.textInput} onChangeText={(t) => { setPhone(t) }} placeholder="Telefone" ></TextInput>
				</KeyboardAvoidingView>
			</View>
			<View style={styles.containerButtons}>
				<TouchableHighlight underlayColor='#99ccff' style={styles.buttons} onPress={handleUpdateUser}>
					<Text style={styles.textButton}>Atualizar</Text>
				</TouchableHighlight>
				<TouchableHighlight style={{padding: metrics.padding}} onPress={handleGoBack}>
					<Text style={styles.textCancel}>Cancelar</Text>
				</TouchableHighlight>
			</View>
			<StatusBar style="auto" />
		</View>
	)
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	titleContainer: {
		width: '90%',
		marginTop: 15,
		padding: 10,
	},
	title: {
		fontSize: 24,
	},
	containerFields: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginBottom: 10,
		padding: metrics.padding,
	},
	textInput: {
		backgroundColor: '#FFF',
		width: '90%',
		marginBottom: 25,
		color: '#222',
		fontSize: 20,
		borderWidth: 1,
		borderColor: "lightgray",
		borderRadius: 7,
		padding: 10
	},
	containerButtons: {
		width: '100%',
		marginBottom: 20,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	buttons: {
		backgroundColor: colors.mainB,
		width: '40%',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: metrics.borderRadius,
		padding: metrics.padding
	},
	textButton: {
		color: '#FFF',
		fontSize: 18
	},
	textCancel:{
		color: colors.mainB
	}
});