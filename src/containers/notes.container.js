import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useContext } from 'react/cjs/react.development';
import { NotesContext } from '../contexts/note.context';


export default function NoteContainer({ navigation }) {

	const { noteList } = useContext(NotesContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		if (noteList && noteList.length && noteList.length > 0) {

			setLoading(false);
		}

	}, [noteList]);


	function renderNoteItem(item) {

		console.log('RenderNoteItem', item);
		return (
			<View style={style.noteItem}>
				<TouchableHighlight onPress={handleDetail} >
					<>
						<Text style={style.noteTitle}>{item.title}</Text>
						<Text style={style.noteContent}>{item.content}</Text>
					</>
				</TouchableHighlight>
			</View>
		)
	}

	function handleDetail(note) {
		navigation.navigate('noteDetail')
	}

	if (!loading) {

		return (

			<View style={style.container}>
				{
					!!noteList && !!noteList.length && !!noteList.length > 0 ? noteList.map((note) => {
						return renderNoteItem(note)
					}) : null
				}
			</View>
		)
	} else {

		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#666"></ActivityIndicator>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '98%',
		opacity: 0.2
	},
	noteItem: {
		width: '100%',
		opacity: 1,
		alignItems: 'flex-start',
		backgroundColor: '#FFF',
		padding: 10
	},
	noteTitle: {
		fontSize: 20
	},
	noteContent: {
		fontSize: 14,
		color: 'darkslategray',
	},
});