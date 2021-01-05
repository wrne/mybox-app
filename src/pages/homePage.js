import React, {useContext, useState, useEffect} from 'react';
import { TouchableHighlight,KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {AuthContext} from '../contexts/auth.context'
import NoteContainer from '../containers/notes.container'

export default function homePage({navigation}){

	const {logOut} = useContext(AuthContext);

	function handleLogOut(){

		logOut();

	}

	function handleDetail(){
		
	}

	return (
		<KeyboardAvoidingView style={styles.background}>
			<StatusBar></StatusBar>
			<NoteContainer />
			<View style={styles.containerFields}>
				<TouchableHighlight onPress={()=>{navigation.navigate('About')}}>
					<Text>Sobre</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={handleLogOut}>
					<Text>Log Out</Text>
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