import React, { useState, useEffect, useRef } from 'react'
import { View, StatusBar, TouchableHighlight, Text, ActivityIndicator, StyleSheet } from 'react-native'

import { Modalize } from 'react-native-modalize';
import FabButton from '../components/fabButton'
import NoteContainer from '../containers/notes.container'
import { useNotes } from '../contexts/note.context'

import { theme } from '../theme'
const { colors, metrics } = theme;

export default function MyNotesPage({ navigation }) {


	// Obtem notas disponíveis do serviço
	// No serviço, se não retornar nada, define array vazio
	const { noteList, setNoteDetail, noteDetail } = useNotes();
	const modalRef = useRef(null);

	// const [modalVisible, setModalVisible] = useState(false);

	// Controle estado da pagina: enquanto está buscando notas, mantem spinner, depois exibe lista ou botão
	const [loading, setLoading] = useState(true);

	function setModalVisible() {

		modalRef.current?.open();
		
	}
	
	function handleDetail(noteItem) {

		// setNoteDetail(note);
		navigation.navigate('noteDetail', {
			screen: 'detail',
			note: noteItem,
			operation: 'edit'
		})
		
	}

	function handleDetailModal(){
		handleDetail(noteDetail);
	}

	async function handleModalView(noteItem){

		await setNoteDetail(noteItem)
		setModalVisible()

	}

	function handleNewNote(){
		navigation.navigate('newNote')
	}

	useEffect(() => {

		if (noteList && noteList.length && noteList.length > 0) {

			// Simulando acesso à API
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}

	}, [noteList]);

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
						setNoteDetail={setNoteDetail}
						setModalVisible={setModalVisible} 
						actionPressItem={handleDetail}
						actionLongPressItem={handleModalView}/>
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

							<TouchableHighlight onPress={() => { }} style={[styles.modalButton, { backgroundColor: colors.secundaryA }]}>
								<Text style={styles.modalButtonText}>Compartilhar</Text>
							</TouchableHighlight>

							<TouchableHighlight onPress={() => { }} style={[styles.modalButton, { backgroundColor: colors.mainB }]}>
								<Text style={styles.modalButtonText}>Excluir</Text>
							</TouchableHighlight>
						</View>
					</Modalize>

					{/* <Modal
						style={styles.modal}
						animationType="fade"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							Alert.alert("Modal has been closed.");
							setModalVisible(!modalVisible);
						}}>
						<View style={styles.modalContent}>
							<Text>Texto do Modal</Text>
						</View>
					</Modal> */}
				</View>
			)
		} else {

			// Se lista estiver vazia renderiza botão para adicionar nova nota
			return (
				<View style={styles.container}>
					<TouchableHighlight>
						<Text>Adicione uma nova Nota!</Text>
					</TouchableHighlight>
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