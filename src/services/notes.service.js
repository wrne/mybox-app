import { API_URL } from '../config';


export const NoteService = {

	async getShareNotes() {

		return await new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						title: 'Nota um',
						content: 'Bla Bla Bla',
					},
					{
						title: 'Nota dois',
						content: 'Bla Bla Bla',
					},
					{
						title: 'Nota três',
						content: 'Bla Bla Bla',
					}
				])
			}, 1000);
		})

	}


}