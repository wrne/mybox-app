import React, { useState, useEffect } from 'react';
import { TouchableHighlight, StyleSheet, View, Text, ActivityIndicator, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native';

export default function NoteContainer({ noteList, setNoteDetail, setModalVisible }) {


	
	const { colors, metrics } = theme;
	const navigation = useNavigation();


	function actionDeleteNote() {
		alert('Ação!')
	}

	function actionShareNote(item) {
		alert('Ação2!')
	}

	function actionLongPress(item) {

		setNoteDetail(item)
		setModalVisible(true)

	}

	
	function handleDetail(note) {

		// setNoteDetail(note);
		navigation.navigate('noteDetail',{ 
			screen: 'detail',
			note:  note
		})

	}
	function renderNoteItem({ item }) {

		return (
			<View style={style.noteItemContainer} >
				{/* <View style={style.textArea}> */}
				<TouchableHighlight
					underlayColor={colors.secundaryB}
					// onPress={() => { handleDetail(item) }}
					onLongPress={() => { actionLongPress(item) }}
					style={style.textArea} >
					<View>
						<Text style={style.noteTitle}>{item.title}</Text>
						<Text style={style.noteContent}>{item.content}</Text>
					</View>
				</TouchableHighlight>
				{/* </View> */}
				<View style={style.buttonsArea}>
					<TouchableHighlight underlayColor={colors.mainA} onPress={() => { actionDeleteNote(item) }} style={style.button}><Icon size={18} name="trash" style={{ color: colors.mainB }}></Icon></TouchableHighlight>
					<TouchableHighlight underlayColor={colors.mainA} onPress={() => { actionShareNote(item) }} style={style.button}><Icon size={18} name="share-alt" style={{ color: colors.mainB }}></Icon></TouchableHighlight>
				</View>
			</View>
		)
	}


	return (
		<View style={style.container}>
			<FlatList
				data={noteList}
				renderItem={renderNoteItem}
				keyExtractor={item => item.id}
			/>
		</View>)
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