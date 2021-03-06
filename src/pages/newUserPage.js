import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight, StatusBar, Alert } from 'react-native';

import { useAuth } from '../contexts/auth.context';
import { theme } from '../theme'

const { colors, metrics } = theme;

export default function aboutPage({ navigation }) {

	const { createUser } = useAuth();

	const [name, setName] = useState('');
	const [personalId, setPersonalId] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	function saveNewUser() {

		if (password === confirmPassword) {

			createUser({ email, password, name, personalId, phone });
			
		} else {

			Alert.alert('Senhas digitadas não conferem. Favor verificar.');

			setPassword('');
			setConfirmPassword('');

		}

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
					<TextInput style={styles.textInput} onChangeText={(t) => { setPersonalId(t) }} placeholder="CPF" ></TextInput>
					<TextInput style={styles.textInput} onChangeText={(t) => { setPhone(t) }} placeholder="Telefone" ></TextInput>
					<TextInput style={styles.textInput} onChangeText={(t) => { setEmail(t) }} placeholder="E-mail" ></TextInput>
					<TextInput style={styles.textInput} onChangeText={(t) => { setPassword(t) }} placeholder="Senha" ></TextInput>
					<TextInput style={styles.textInput} onChangeText={(t) => { setConfirmPassword(t) }} placeholder="Confirme a Senha" ></TextInput>
				</KeyboardAvoidingView>
			</View>
			<View style={styles.containerButtons}>
				<TouchableHighlight underlayColor='#99ccff' style={styles.buttons} onPress={saveNewUser}>
					<Text style={styles.textButton}>Cadastrar</Text>
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
		// alignItems: 'flex-start'
	},
	title: {
		fontSize: 24,
	},
	containerFields: {
		// marginTop: 20,
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
		// padding: metrics.padding,
		// flexDirection: 'row',
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