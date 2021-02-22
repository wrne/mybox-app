import React, { useState, useEffect } from 'react'
import { View, StatusBar, TouchableHighlight, Text, ActivityIndicator, StyleSheet, Modal } from 'react-native'

import NoteContainer from '../containers/notes.container'
import { useNotes } from '../contexts/note.context'

export default function MyNotesPage(props) {


	// Obtem notas disponíveis do serviço
	// No serviço, se não retornar nada, define array vazio
	const { noteList, setNoteDetail, noteDetail } = useNotes();
	const [modalVisible, setModalVisible] = useState(false);

	// Controle estado da pagina: enquanto está buscando notas, mantem spinner, depois exibe lista ou botão
	const [loading, setLoading] = useState(true);

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
					<StatusBar style="light"></StatusBar>

					{/* <ListPage {...props} noteList={noteList} setNoteDetail={setNoteDetail} setModalVisible={setModalVisible} ></ListPage> */}

					<NoteContainer
						noteList={noteList}
						setNoteDetail={setNoteDetail}
						setModalVisible={setModalVisible} />

					<Modal
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
					</Modal>
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
	modal: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		margin: 100,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	modalContent: {
		flex: 1,
		backgroundColor: 'gray',
		height: '100%'
	},
});