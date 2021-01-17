import React from 'react';
import {View, Text, TouchableHighlights, StyleSheet} from 'react-native';

export default function MenuDrawerItem({route}){

	const {title} = route.params;

	return(
		<View style={styles.menuItemContainer}>
			<TouchableHighlights>
			<Text>{title}</Text>
			</TouchableHighlights>
		</View>
	)
}

const styles = StyleSheet.create({
	menuItemContainer:{
		backgroundColor: '#e2e2e2',
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 0.5,
	}
})