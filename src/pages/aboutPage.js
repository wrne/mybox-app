import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import logo from '../../assets/treasure-chest.png'

export default function aboutPage(){

	return (
		<KeyboardAvoidingView style={styles.background}>
			<View style={styles.containerLogo}>
				<Image source={logo} style={styles.logo}></Image>
			</View>
			<View style={styles.containerFields}>

				<Text style={styles.textAcessar}>Este app foi desenvolvido por:</Text>
				<Text style={styles.textAcessar}>Wanderley R. Neto</Text>
				<Text style={styles.textAcessar}>2020 - SP - Brasil</Text>
				<Text style={styles.textAcessar}>contato@mybox.app.br</Text>

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
		justifyContent: 'center',
	},
	containerLogo:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo:{
		height: 170,
		width: 170
	},
	containerFields:{
		flex:1,
		alignItems: 'flex-start',
		justifyContent:'center',
		width: '90%',
		padding: 10
	},
	textAcessar:{
		color: '#191919',
		fontSize: 18
	},
});