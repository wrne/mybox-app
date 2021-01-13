import React, {createContext, useEffect, useState} from 'react';
import { NoteService } from "../services/notes.service";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {

	const [noteList, setNoteList] = useState([]);

	useEffect(()=>{

		async function getMyNotes(){

			const list = await NoteService.getMyNotes();
			
			setNoteList(list);
		}

		getMyNotes();

	},[]);

	return(
		<NotesContext.Provider value={{noteList}}>
			{children}
		</NotesContext.Provider>
	)
}