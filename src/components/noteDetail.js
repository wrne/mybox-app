import React from 'react';
import { KeyboardAvoidingView,  StyleSheet, View, Text, TextInput } from 'react-native';
import { useNotes } from '../contexts/note.context';

export default function NoteDetail({route}) {

	const { note } = route.params;
	const {content, title, date} = note	

	return (
		<View style={styles.container}>
			{/* <KeyboardAvoidingView> */}
				<View style={styles.header}>
					<TextInput style={styles.title}>
						{title}
					</TextInput>
					<TextInput style={styles.date}>
						{date}
					</TextInput>
				</View>
				<View style={styles.content}>
					<TextInput style={styles.textContent} multiline scrollEnabled={true} >
						{content}
					</TextInput>
				</View>
			{/* </KeyboardAvoidingView> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		
	},
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
	title: {
		fontSize: 24,
	},
	date: {
		fontSize: 15,
	},
	content: {
		padding: 10,
	},
	textContent: {
		fontSize: 15
	}
})