import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NoteService } from '../services/notes.service';

export default function NoteContainer() {

	const [loading, setLoading] = useState(true);
	const [noteList, setNoteList] = useState([]);
	const [noteDetail, setNoteDetail] = useState({});

	useEffect(() => {

		async function getNoteList() {

			return await NoteService.getShareNotes();
		}

		const list = getNoteList();

		if (!!list) {
			setNoteList(list);
		}
		console.log('NOtas', list);
		setLoading(false);

	}, []);

	if (loading) {
		
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#666"></ActivityIndicator>
			</View>
		)
	} else {

		return (
			<View>
				{
					!!noteList ? noteList.map((note) => {
						return (
							<View>
								<Text>note.title</Text>
								<Text>note.content</Text>
							</View>
						)
					}) : null
				}
			</View>
		)
	}
}