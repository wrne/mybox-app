import React, { useState, useEffect, useRef } from 'react'
import { View, StatusBar, TouchableHighlight, Text, ActivityIndicator, StyleSheet, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Modalize } from 'react-native-modalize';
import FabButton from '../components/fabButton'
import NoteContainer from '../containers/notes.container'
import { useNotes } from '../contexts/note.context'

import { theme } from '../theme'
const { colors, metrics } = theme;

export default function MyNotesPage({ navigation }) {


	// Obtem notas disponíveis do serviço
	// No serviço, se não retornar nada, define array vazio
	const { noteList,loading, noteDetail, editNote, deleteNote, shareNewNote } = useNotes();
	const modalRef = useRef(null);
	const [noteDetailToModal, setNoteDetailToModal ] = useState({});
	const [shareToMailToModal, setShareToMailToModal ] = useState('');

	function setModalVisible() {

		modalRef.current?.open();
		
	}
	
	function handleDetail(noteItem) {

		// setNoteDetail(note);
		navigation.navigate('noteDetail', {
			screen: 'detail',
			note: noteItem,
			operation: 'edit',
			editAction: editNote,
			delAction: deleteNote,
			shareAction: shareNewNote
		})
		
	}

	function handleDetailModal(){
		handleDetail(noteDetailToModal);
	}

	function handleShareNoteByModal(){
		shareNewNote(noteDetailToModal, shareToMailToModal)
	}

	function handleOpenShareNoteModal(){
		// TODO:
		// Abrir novo campo no modal para informar o email do usuário com quem a nota será compartilhada.
		// Após informado, dispara função abaixo para a função do context compartilhar a nota
	}

	async function handleModalView(noteItem){

		setNoteDetailToModal(noteItem);
		setModalVisible();

	}

	function handleNewNote(){
		navigation.navigate('newNote')
	}

	if (!loading) {

		if (noteList && noteList.length > 0) {

			// Envia lista para "ListPage" via props
			return (
				<View style={styles.container}>
					<StatusBar 
						barStyle="light-content" 
						backgroundColor={colors.dark}
					/>
					
					<NoteContainer
						noteList={noteList}
						setModalVisible={setModalVisible} 
						actionPressItem={handleDetail}
						actionLongPressItem={handleModalView} />

					<FabButton style={{right:30, bottom: 30}} action={handleNewNote}/>

					<Modalize
						ref={modalRef}
						snapPoint={200}
						modalHeight={800}
						HeaderComponent={
							<View style={{ width: '100%', padding: 20 }}>
								<Text style={styles.headerModalText}>O que deseja fazer?</Text>
							</View>
						}>
						<View style={styles.modalContent}>
							<TouchableHighlight onPress={handleDetailModal} style={[styles.modalButton, { backgroundColor: colors.secundaryB }]} >
								<Text style={styles.modalButtonText} >Detalhes</Text>
							</TouchableHighlight>

							<TouchableHighlight onPress={handleOpenShareNoteModal} style={[styles.modalButton, { backgroundColor: colors.secundaryA }]}>
								<Text style={styles.modalButtonText}>Compartilhar</Text>
							</TouchableHighlight>

							<TouchableHighlight onPress={() => { }} style={[styles.modalButton, { backgroundColor: colors.mainB }]}>
								<Text style={styles.modalButtonText}>Excluir</Text>
							</TouchableHighlight>
						</View>
					</Modalize>

				</View>
			)
		} else {

			// Se lista estiver vazia renderiza botão para adicionar nova nota
			return (
				<View style={styles.container}>
					<TouchableOpacity onPress={handleNewNote}>
						<Text>Toque aqui para criar sua primeira nota!</Text>
					</TouchableOpacity>
				</View>
			)
		}
	} else {

		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#666"></ActivityIndicator>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerModalText: {
		fontSize: 20,
	},
	modal: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		padding: 35,
		alignItems: "center",

	},
	modalContent: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	modalButton: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 80,
		width: 100,
		borderRadius: metrics.borderRadius,
	},
	modalButtonText: {
		fontSize: 15,
		color: 'black'
	},
});