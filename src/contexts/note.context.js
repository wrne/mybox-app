import React, { createContext, useEffect, useState, useContext } from 'react';
import { NoteService } from "../services/notes.service";
// import {useAuth} from './auth.context'


export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {

	const inicialNote = {
		title: 'Nova Nota',
		content: 'Seu texto Aqui',
		date: Date(),
		id: 0
	}
	const [noteList, setNoteList] = useState([]);
	const [noteDetail, setNoteDetail] = useState(inicialNote);

	async function  setNoteDefault(){
		
		await setNoteDetail(inicialNote);

	}

	useEffect(() => {

		async function getMyNotes() {

			const list = await NoteService.getMyNotes();

			if (list && list.length > 0) {
				setNoteList(list);
			}
		}

		getMyNotes();

	}, []);

	return (
		<NotesContext.Provider value={{ noteList, noteDetail,inicialNote, setNoteDefault, setNoteDetail }}>
			{children}
		</NotesContext.Provider>
	)
}

export function useNotes() {

	return useContext(NotesContext);
}