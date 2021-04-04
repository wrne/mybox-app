import React, { useEffect, useState } from 'react';
import { View, StyleSheet,ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { useNotes } from '../contexts/note.context'
import NoteDetail from '../components/noteDetail'

export default function NewNotePage({navigation}) {
	const { inicialNote, addNewNote } = useNotes();
	const [isLoading, setIsLoading] = useState(true);

	// Carrega nota inicial (vazia) no contexto de Notas
	useFocusEffect(() => {
		
		navigation.navigate('noteDetail',{
			note: inicialNote, 
			operation: 'insert',
			insertAction: addNewNote
		})

	});

	// if (isLoading) {
		return (

			<View style={styles.container}>
				<ActivityIndicator size="large" color="#666"></ActivityIndicator>
			</View>
		);
	/*} else {
		console.log('PAssou pela if do NoteDetail');
		return (

			<View style={styles.container}>
				<NoteDetail />
			</View>
		);
	}*/
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	},
});