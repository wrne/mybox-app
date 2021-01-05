import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import logo from '../../assets/treasure-chest.png'
//import { Screens } from '../routes';

export default function aboutPage({navigation}){

	return (
		<KeyboardAvoidingView style={styles.background}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Informe seus dados:</Text>
			</View>
			<View style={styles.containerFields}>
				<TextInput style={styles.textInput} placeholder="Nome" ></TextInput>
				<TextInput style={styles.textInput} placeholder="CPF" ></TextInput>
				<TextInput style={styles.textInput} placeholder="Telefone" ></TextInput>
				<TextInput style={styles.textInput} placeholder="E-mail" ></TextInput>
				<TextInput style={styles.textInput} placeholder="Senha" ></TextInput>
				<TextInput style={styles.textInput} placeholder="Confirme a Senha" ></TextInput>
			</View>
			<View style={styles.containerButtons}>
				<TouchableHighlight underlayColor='#99ccff' style={styles.buttons} onPress={()=>{}}>
					<Text style={styles.textButton}>Cadastrar</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor='#99ccff' style={styles.buttons} onPress={()=>{navigation.goBack()}}>
					<Text style={styles.textButton}>Cancelar</Text>
				</TouchableHighlight>
			</View>
			<StatusBar style="auto" />
		</KeyboardAvoidingView>
	)
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#e8e8e8',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	titleContainer:{
		width: '90%',
		marginTop: 15,
		padding: 10,
		// alignItems: 'flex-start'
	},
	title:{		
		fontSize: 24,		
	},
	containerFields:{
		// marginTop: 20,
		alignItems: 'center',
		justifyContent:'center',
		width: '90%',
		marginBottom: 10
	},
	textInput:{		
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
	containerButtons:{
		width: '90%',
		marginBottom: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	buttons:{
		backgroundColor: '#35AAFF',
		width: '40%',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
		padding: 10
	},
	textButton: {
		color: '#FFF',
		fontSize: 18
	},
});