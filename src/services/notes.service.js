import { API_URL } from '../config';
import { apiService } from './apiService'
import firestore from '@react-native-firebase/firestore';
import { Share } from 'react-native';



export const NoteService = {

	async getMyNotes(user) {

		let myNotes = [];

		try {

			// Consulta notas do usuário logado
			const querySnapshot = await firestore()
				.collection('Notes')
				// Filter results
				.where('user', '==', user.id)
				.get()

			// Controe array com notas obtidas
			querySnapshot.forEach(docSnapShot => {

				const doc = docSnapShot.data()

				const newNote = {
					id: doc.id,
					title: doc.title,
					date: doc.date,
					content: doc.content
				};

				myNotes.push(newNote);
			})

			return myNotes;
			// });
		}
		catch (e) {
			throw 'Erro ao obter notas. Tente novamente mais tarde'
		}
	},

	activeListenerMyNotes(user, setNoteList, setLoading) {

		let myNotes = [];

		const subscriber = firestore()
			.collection('Notes')
			.where('user', '==', user.id)
			.onSnapshot(querySnapshot => {

				myNotes = [];

				querySnapshot.forEach(docSnapShot => {

					const doc = docSnapShot.data()

					const note = {
						id: docSnapShot.id,
						title: doc.title,
						date: doc.date,
						content: doc.content,
						date: doc.date
					};

					myNotes.push(note);
				});
				setNoteList(myNotes);
				setLoading(false);

			});

		return subscriber;

	},

	async new(newNote) {

		firestore()
			.collection('Notes')
			.add(newNote)
			.then(() => {
				console.log('Note added!');
			});

	},

	async edit(note) {

		firestore()
			.collection('Notes')
			.doc(note.id)
			.update(note)
			.then(() => {
				console.log('Note updated!');
			});
	},

	async delete(idNote) {

		firestore()
			.collection('Notes')
			.doc(idNote)
			.delete()
			.then(() => {
				console.log('Note deleted!');
			});

	},

	async share(shareNote) {

		firestore()
			.collection(('SharedNotes'))
			.add(shareNote)
			.then(() => {
				console.log('Note shared!');
			});

	},

	async getNotesSharedWithMe(user) {

		let mySharedNotes = [];

		try {

			// Consulta notas do usuário logado
			const querySnapshot = await firestore()
				.collection('SharedNotes')
				// Filter results
				.where('sharedWith.id', '==', user.id)
				.get()

			// Controe array com notas obtidas
			querySnapshot.forEach(docSnapShot => {
				const doc = docSnapShot.data()
				

				const newNote = {
					...doc.note,
					// TODO: Adicionar info sobre usuário que compartilhou
				};

				mySharedNotes.push(newNote);
			})

			return mySharedNotes;
		}
		catch (SharedNotes) {
			throw 'Erro ao obter notas. Tente novamente mais tarde'
		}
	},


}