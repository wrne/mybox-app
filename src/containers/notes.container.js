import React, { useState, useEffect } from 'react';
import { TouchableHighlight, StyleSheet, View, Text, ActivityIndicator,  FlatList } from 'react-native';
import { useContext } from 'react/cjs/react.development';
import { NotesContext } from '../contexts/note.context';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NoteContainer({ navigation }) {

	const { noteList } = useContext(NotesContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		if (noteList && noteList.length && noteList.length > 0) {

			setLoading(false);
		}

	}, [noteList]);

	function actionDeleteNote(){
		alert('Ação!')
	}

	function actionShareNote(item){
		alert('Ação2!')
	}

	function renderNoteItem({ item }) {

		console.log('RenderNoteItem', item);
		return (
			<View style={style.noteItemContainer} >
				{/* <View style={style.textArea}> */}
				<TouchableHighlight underlayColor='#f3f3f3' onPress={()=>{handleDetail(item)}} style={style.textArea} >
					<View>
						<Text style={style.noteTitle}>{item.title}</Text>
						<Text style={style.noteContent}>{item.content}</Text>
					</View>
				</TouchableHighlight>
				{/* </View> */}
				<View style={style.buttonsArea}>
					<TouchableHighlight underlayColor='#f3f3f3' onPress={()=>{actionDeleteNote(item)}} style={style.button}><Icon size={18} name="trash"></Icon></TouchableHighlight>
					<TouchableHighlight underlayColor='#f3f3f3' onPress={()=>{actionShareNote(item)}} style={style.button}><Icon size={18} name="share-alt"></Icon></TouchableHighlight>
				</View>
			</View>

		)
	}

	function handleDetail(note) {

		navigation.navigate('noteDetail',{note:note})
	}

	if (!loading) {

		return (

			<View style={style.container}>
				<FlatList
					data={noteList}
					renderItem={renderNoteItem}
					keyExtractor={item => item.id}
				/>
				{/* {
					!!noteList && !!noteList.length && !!noteList.length > 0 ? noteList.map((note) => {
						return renderNoteItem(note)
					}) : null
				} */}
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
		width: '100%'
	},
	noteItemContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FFF',
		padding: 10,
		borderBottomWidth: 0.5,
	},
	textArea: {
		flex: 1
	},
	buttonsArea: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		// flex: 1,
	},
	noteTitle: {
		fontSize: 20
	},
	noteContent: {
		fontSize: 14,
		color: 'darkslategray',
	},
	button: {		
		justifyContent: 'space-around',
		alignItems: 'center',
		fontStyle: 'normal',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.8
	}
});