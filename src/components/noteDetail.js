import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../theme'

const { colors } = theme;

export default function NoteDetail({ route }) {

	const { note, operation } = route.params;
	const { content, title, date } = note

	console.log('Operation',operation);
	return (
		<View style={styles.container}>

			{/* <KeyboardAvoidingView> */}

			<View style={styles.header}>

				<View style={styles.headerContent}>
					<TextInput style={styles.title}>
						{title}
					</TextInput>
					<TextInput style={styles.date}>
						{date}
					</TextInput>
				</View>

				{operation == 'edit' &&
					<View style={styles.areaHeaderButtons}>
						<TouchableHighlight style={styles.button}>
							<Icon size={24} name="share-2" style={{ color: colors.mainB }} />
						</TouchableHighlight>
						<TouchableHighlight style={styles.button}>
							<Icon size={24} name="trash-2" style={{ color: colors.mainB }} />
						</TouchableHighlight>
					</View>
				}

				{operation == 'insert' &&
					<View style={styles.areaHeaderButtons}>
						<TouchableHighlight style={styles.button}>
							<Icon size={24} name="save" style={{ color: colors.mainB }} />
						</TouchableHighlight>
					</View>
				}

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
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
		marginLeft: 15,
		marginRight: 15,
		borderBottomWidth: 0.5
	},
	areaHeaderButtons: {
		flexDirection: 'row',
		marginRight: 10,
	},
	headerContent: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	button: {
		padding: 10
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