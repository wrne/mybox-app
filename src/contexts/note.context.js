import React, { createContext, useEffect, useState, useContext } from 'react';
import { Alert } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { NoteService } from "../services/notes.service";
import { useAuth } from './auth.context'


export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {

	const inicialNote = {
		title: 'Nova Nota',
		content: 'Seu texto Aqui',
		date: Date(),
		id: 0
	}
	const [noteList, setNoteList] = useState([]);
	const [noteSharedWithMe, setNoteSharedWithMe] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loadingSharedNotes, setLoadingSharedNotes] = useState(true);
	const { user, getInfoUser } = useAuth();

	useEffect(() => {

		/**
		 * Listener MyNotes - Atualiza a lista de notas a cada alteração. Mantendo o state sempre atualizado
		 * -- Nota de explicação sobre o SetLoadin -- 
		 * Uma vez que o retorno é uma Promise, não posso usar o await para definir o momento
		 * correto de alterar o Loading. Sendo assim passo a responsabilidade da alteração para 
		 * o Listener 
		 */
		const subscriber = NoteService.activeListenerMyNotes(user, setNoteList, setLoading);
		return () => subscriber();

	}, []);

	async function addNewNote(newNote) {

		// Define estrutura da nota que será salva gravada
		const note = {
			title: newNote.title,
			content: newNote.content,
			date: new Date(),
			user: user.id
		}

		try {

			// Grava nova nota
			await NoteService.new(note);

		}
		catch (error) {
			Alert.alert('Ops..', '' + error)
			return
		}

	}

	async function editNote(editNote) {
		try {
			await NoteService.edit(editNote);

		} catch (error) {
			Alert.alert('Ops..', '' + error)
			return

		}
	}

	async function deleteNote(noteId) {
		try {
			await NoteService.delete(noteId);

		} catch (error) {
			Alert.alert('Ops..', '' + error)
			return
		}
	}

	async function shareNewNote(noteToShare, shareWith) {

		const sharedWithUser = await getInfoUser({ email: shareWith })

		if (!!sharedWithUser) {

			const share = {
				note: noteToShare,
				userOwner: user,
				sharedWith: sharedWithUser
			}

			try {

				await NoteService.share(share)

			} catch (error) {
				Alert.alert('Ops..', '' + error)
				return
			}
		}

	}

	async function getNotesSharedWithMe() {

		const notesSharedWithMe = await NoteService.getNotesSharedWithMe(user);
		
		setNoteSharedWithMe(notesSharedWithMe);
		setLoadingSharedNotes(false);

	}

	return (
		<NotesContext.Provider value={
			{
				noteList,
				noteSharedWithMe,
				inicialNote,
				loading,
				loadingSharedNotes,
				addNewNote,
				editNote,
				deleteNote,
				shareNewNote,
				getNotesSharedWithMe
			}
		}>
			{children}
		</NotesContext.Provider>
	)
}

export function useNotes() {

	return useContext(NotesContext);
}