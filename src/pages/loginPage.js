import React, {useState, useContext} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import {AuthContext} from '../contexts/auth.context'
import { StatusBar } from 'expo-status-bar';
import logo from '../../assets/treasure-chest.png'

// import {Screens} from '../routes/routes'
import { login } from '../services/loginService';

export default function loginPage({ navigation }) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {signed, logIn} = useContext(AuthContext);


	function changeEmailAction(value){

		setEmail(value);
		
	}
	
	function changePasswordAction(value){
		
		setPassword(value);

	}

	function submitForm(){

		console.log('Submitting....',email,password);
		logIn(email,password);

	}

	return (
		<KeyboardAvoidingView style={styles.background}>
			<View style={styles.containerLogo}>
				<Image source={logo}></Image>
			</View>
			<View style={styles.containerFields}>

				<TextInput style={styles.input} placeholder="Email" onChangeText={changeEmailAction} id="email" value={email} />
				<TextInput style={styles.input} placeholder="Senha" onChangeText={changePasswordAction} id="password" value={password} />

				<TouchableOpacity style={styles.btnAcessar} onPress={submitForm}>
					<Text style={styles.textAcessar}>Acessar</Text>
				</TouchableOpacity>

				<View style={styles.links}>

					<TouchableOpacity style={styles.btnCadastrar} onPressIn={() => { navigation.navigate('NewUser') }}>
						<Text style={styles.textCadastrar}>Cadastrar</Text>
					</TouchableOpacity>
{/* 
					<TouchableOpacity style={styles.btnCadastrar} onPressIn={() => { navigation.navigate('About') }}>
						<Text style={styles.textCadastrar}>Sobre</Text>
					</TouchableOpacity> */}
				</View>


			</View>
			<StatusBar style="auto" />
		</KeyboardAvoidingView>
	)
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#f4faff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerLogo: {
		flex: 1,
		justifyContent: 'center'
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
		backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
		padding: 10
	},
	textAcessar: {
		color: '#FFF',
		fontSize: 18
	},
	btnCadastrar: {
		marginTop: 15,
		marginBottom: 30
	},
	textCadastrar: {
		color: '#191919'
	},
	links: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	}

});