import { API_URL } from '../config';


export const NoteService = {

	getMyNotes() {

		return  new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						id: 1,
						title: 'Nota um',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla',
						date: '24/11/2020'
					},
					{
						id: 2,
						title: 'Nota dois',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla',
						date: '02/12/2020'
					},
					{
						id: 3,
						title: 'Nota três',
						content: 'Bla Bla Bla Bla Bla Bla Bla',
						date: '27/12/2020'
					},
					{
						id: 4,
						title: 'Nota um',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla',
						date: '24/11/2020'
					},
					{
						id: 5,
						title: 'Nota dois',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla',
						date: '02/12/2020'
					},
					{
						id: 6,
						title: 'Nota três',
						content: 'Bla Bla Bla Bla Bla Bla Bla',
						date: '27/12/2020'
					},
					{
						id: 7,
						title: 'Nota um',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla',
						date: '24/11/2020'
					},
					{
						id: 8,
						title: 'Nota dois',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla',
						date: '02/12/2020'
					},
					{
						id: 9,
						title: 'Nota três',
						content: 'Bla Bla Bla Bla Bla Bla Bla',
						date: '27/12/2020'
					},
					{
						id: 10,
						title: 'Nota um',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla',
						date: '24/11/2020'
					},
					{
						id: 11,
						title: 'Nota dois',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla',
						date: '02/12/2020'
					},
					{
						id: 13,
						title: 'Nota três',
						content: 'Bla Bla Bla Bla Bla Bla Bla',
						date: '27/12/2020'
					},
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