import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function NoteDetail({ route, navigation }) {
	const { content, title, date } = route.params.note;

	return (
		<View>
			<View style={styles.header}>

				<Text style={styles.title}>
					{title}
				</Text>
				<Text style={styles.date}>
					{date}
				</Text>
			</View>
			<View style={styles.content}>

				<TextInput style={styles.textContent}>
					{content}
				</TextInput>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		// flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingTop: 10,
		paddingBottom: 10,
		marginLeft: 15,
		marginRight: 15,
		borderBottomWidth: 0.5
	},
	title:{
		fontSize: 24,
	},
	date:{
		fontSize: 15,
	},
	content: {
		padding: 10,
	},
	textContent:{
		fontSize: 15
	}
})