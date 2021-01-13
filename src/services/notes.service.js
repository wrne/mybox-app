import { API_URL } from '../config';


export const NoteService = {

	getMyNotes() {

		return  new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						id: 1,
						title: 'Nota um',
						content: 'Bla Bla Bla',
					},
					{
						id: 2,
						title: 'Nota dois',
						content: 'Bla Bla Bla',
					},
					{
						id: 3,
						title: 'Nota três',
						content: 'Bla Bla Bla',
					}
				])
			}, 1000);
		})
	},

	getShareNotes() {

		
		return resultApi = new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						title: 'Nota share um',
						content: 'Bla Bla Bla',
					},
					{
						title: 'Nota share dois',
						content: 'Bla Bla Bla',
					},
					{
						title: 'Nota share três',
						content: 'Bla Bla Bla',
					}
				])
			}, 1000);
		})
	}


}