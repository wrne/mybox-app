import React from 'react';
import { useState } from 'react';
import { TouchableHighlight, StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../theme'

const { colors } = theme;

export default function NoteDetail({ route, navigation }) {

	const { note, operation, insertAction, editAction, delAction, shareAction } = route.params;
	const { content, title, date, id } = note

	const [contentState, setContent] = useState(content)
	const [titleState, setTitle] = useState(title)
	const [dateState, setDate] = useState(date)

	const [shareWithMail, setShareWithMail] = useState('')

	async function handleInsert() {

		const newNote = {
			content: contentState,
			title: titleState,
			date: dateState
		}

		// executa método de gravação da nova nota
		await insertAction(newNote)
		// rediciona para 'Minhas Notas'
		navigation.navigate('myNotes', { screen: 'myNotesPage' });

	}

	async function handleEdit() {

		const editNote = {
			content: contentState,
			title: titleState,
			date: dateState,
			id: id
		}

		// executa método de gravação da nova nota
		await editAction(editNote)
		// rediciona para 'Minhas Notas'
		navigation.navigate('myNotes', { screen: 'myNotesPage' });

	}

	async function handleDelete() {

		// executa método de gravação da nova nota
		await delAction(id);
		// rediciona para 'Minhas Notas'
		navigation.navigate('myNotes', { screen: 'myNotesPage' });

	}

	async function handleShare() {

		if (!!shareWithMail) {
			Alert.alert('Favor informar um email para compartilhar a nota.');
			return;
		}
		// Salva estado atual da nota antes de compartilhar
		if (content !== contentState || title !== titleState || date !== dateState) {
			await handleEdit();
		}

		// Procede com o compartilhamento
		await shareAction(
			{
				...note,
				content: contentState,
				title: titleState,
				date: dateState
			},
			shareWithMail);

		navigation.navigate('myNotes', { screen: 'myNotesPage' });
	}

	console.log('Operation', operation);
	console.log('Detail - date:', dateState);
	return (
		<View style={styles.container}>

			{/* <KeyboardAvoidingView> */}

			<View style={styles.header}>

				<View style={styles.headerContent}>
					<TextInput
						style={styles.title}
						onChangeText={(t) => setTitle(t)}
						value={titleState} />

					<TextInput
						style={styles.date}
						onChangeText={(t) => setDate(t)}
						value={dateState} />

				</View>

				{operation == 'edit' &&
					<View style={styles.areaHeaderButtons}>
						<TouchableOpacity style={styles.button} onPress={handleEdit}>
							<Icon size={24} name="save" style={{ color: colors.mainB }} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={handleShare}>
							<Icon size={24} name="share-2" style={{ color: colors.mainB }} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={handleDelete}>
							<Icon size={24} name="trash-2" style={{ color: colors.mainB }} />
						</TouchableOpacity>
					</View>
				}

				{operation == 'insert' &&
					<View style={styles.areaHeaderButtons}>
						<TouchableOpacity style={styles.button} onPress={handleInsert}>
							<Icon size={24} name="save" style={{ color: colors.mainB }} />
						</TouchableOpacity>
					</View>
				}

			</View>
			<View style={styles.content}>

				<TextInput
					style={styles.textContent}
					multiline
					scrollEnabled={true}
					onChangeText={(t) => setContent(t)}
					value={contentState} />

			</View>

			{operation == 'edit' &&

				<View style={styles.shareWithBox}>
					<TextInput
						style={{ flex: 1, }}
						value={shareWithMail}
						placeholder="Compartilhar com.."
						onChangeText={(t) => setShareWithMail(t)} />
					<View style={styles.shareButton}>
						<TouchableOpacity style={{ justifyContent: 'center' }}>
							<Text >OK</Text>
						</TouchableOpacity>
					</View>
				</View>
			}
			{/* </KeyboardAvoidingView> */}

		</View >
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
		paddingTop: 15,
		paddingLeft: 10
	},
	title: {
		fontSize: 24,
	},
	date: {
		fontSize: 15,
	},
	content: {
		flex: 1,
		padding: 10,

	},
	textContent: {
		fontSize: 15
	},
	shareWithBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 15,
		marginRight: 15,
		borderTopWidth: 0.5,
	},
	shareButton: {
		// width: '10%',
		// height: '100%',
		// backgroundColor: 'gray',
		justifyContent: 'center',
		alignItems: 'center'
	},
})