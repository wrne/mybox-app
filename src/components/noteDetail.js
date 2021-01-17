import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

export default function NoteDetail({ route, navigation }) {
	const { content, title, date } = route.params.note;

	return (
		<View>
			<KeyboardAvoidingView>
				<View style={styles.header}>

					<Text style={styles.title}>
						{title}
					</Text>
					<Text style={styles.date}>
						{date}
					</Text>
				</View>
				<View style={styles.content}>
					{/* <ScrollView> */}

					<TextInput style={styles.textContent} multiline scrollEnabled={true} >
						{content}
					</TextInput>
					{/* </ScrollView> */}
				</View>
			</KeyboardAvoidingView>
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