import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import logo from '../../assets/treasure-chest.png'

export default function homePage(){

	return (
		<KeyboardAvoidingView style={styles.background}>
			<StatusBar></StatusBar>
			<View style={styles.containerLogo}>
				<Image source={logo}></Image>
			</View>
			<View style={styles.containerFields}>

				<Text style={styles.textAcessar}>Home...</Text>

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
		justifyContent: 'center'
	},
	containerFields:{
		flex:1,
		alignItems: 'center',
		justifyContent:'center',
		width: '90%'
	},
	textAcessar:{
		color: '#FFF',
		fontSize: 18
	},
});