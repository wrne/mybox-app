import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../theme'

const {colors, metrics} = theme;

export default function FabButton({style, action}){


	return(

		<View style={[styles.container, style]} >
			<TouchableWithoutFeedback onPress={action}>
			<Icon size={24} name="plus" style={{color: colors.secundaryA}} />
			</TouchableWithoutFeedback>
		</View>

	);
}

const styles = StyleSheet.create({
	container:{
		backgroundColor: `${colors.secundaryB}`,
		height: 60,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		borderRadius: 50
	},
});