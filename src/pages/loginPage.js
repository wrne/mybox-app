import React, { useState } from 'react';
import { KeyboardAvoidingView, StatusBar,StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import { useAuth } from '../contexts/auth.context'
import logo from '../../assets/my-box-logo-black.png';
import {useMessages} from '../contexts/message.context';
import {theme} from '../theme';

const {colors,metrics} = theme;

export default function loginPage({ navigation }) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { logIn } = useAuth();
	const {message} = useMessages();

	function changeEmailAction(value) {

		setEmail(value);

	}

	function changePasswordAction(value) {

		setPassword(value);

	}

	function submitForm() {

		logIn(email, password);

	}

	return (
		<KeyboardAvoidingView style={styles.background}>
		<StatusBar style="auto" />
			<View style={styles.containerLogo}>
				<Image source={logo} style={styles.logo} ></Image>
			</View>
			<View style={styles.containerFields}>

				<View>
					<Text>{message ? message : null}</Text>
				</View>
				<TextInput style={styles.input} placeholder="Email" onChangeText={changeEmailAction} id="email" value={email} />
				<TextInput style={styles.input} placeholder="Senha" onChangeText={changePasswordAction} id="password" value={password} />

				<TouchableOpacity style={styles.btnAcessar} onPress={submitForm}>
					<Text style={styles.textAcessar}>Acessar</Text>
				</TouchableOpacity>

				<View style={styles.links}>

					<TouchableOpacity style={styles.btnCadastrar} onPressIn={() => { navigation.navigate('NewUser') }}>
						<Text style={styles.textCadastrar}>Cadastrar</Text>
					</TouchableOpacity>
				</View>


			</View>
		</KeyboardAvoidingView>
	)
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerLogo: {
		flex: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 350,
		height: 120
	},
	containerFields: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%'
	},
	input: {
		backgroundColor: '#FFF',
		width: '90%',
		marginBottom: 15,
		color: '#222',
		fontSize: 20,
		borderWidth: 1,
		borderColor: "lightgray",
		borderRadius: 7,
		padding: 10
	},
	btnAcessar: {
		backgroundColor: colors.mainB,
		width: '90%',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: metrics.borderRadius,
		padding: metrics.padding
	},
	textAcessar: {
		color: colors.light,
		fontSize: 18
	},
	btnCadastrar: {
		marginTop: 15,
		marginBottom: 30
	},
	textCadastrar: {
		color: colors.mainB
	},
	links: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	}

});