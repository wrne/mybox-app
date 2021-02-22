import { API_URL } from '../config';
import {apiService} from './apiService'


export const NoteService = {

	getMyNotes(token) {

		return resultApi = new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						id:1,
						title: 'Nota share um',
						date: '03/12/2020',
						content: 'Bla Bla Bla Bla Bla',
					},
					{
						id:2,
						title: 'Nota share dois',
						date: '22/12/2020',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla',
					},
					{
						id:3,
						title: 'Nota share três',
						date: '02/01/2021',
						content: 'Bla Bla Bla Bla Bla Bla Bla',
					},
					{
						id:4,
						title: 'Nota share um',
						date: '03/12/2020',
						content: 'Bla Bla Bla Bla Bla',
					},
					{
						id:5,
						title: 'Nota share dois',
						date: '22/12/2020',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla',
					},
					{
						id:6,
						title: 'Nota share três',
						date: '02/01/2021',
						content: 'Bla Bla Bla Bla Bla Bla Bla',
					},
					{
						id:7,
						title: 'Nota share um',
						date: '03/12/2020',
						content: 'Bla Bla Bla Bla Bla',
					},
					{
						id:8,
						title: 'Nota share dois',
						date: '22/12/2020',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla',
					},
					{
						id:9,
						title: 'Nota share três',
						date: '02/01/2021',
						content: 'Bla Bla Bla Bla Bla Bla Bla',
					},
					{
						id:10,
						title: 'Nota share três',
						date: '02/01/2021',
						content: 'Bla Bla Bla Bla Bla Bla Bla',
					},
					{
						id:11,
						title: 'Nota share um',
						date: '03/12/2020',
						content: 'Bla Bla Bla Bla Bla',
					},
					{
						id:12,
						title: 'Nota share dois',
						date: '22/12/2020',
						content: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla',
					},
					{
						id:13,
						title: 'Nota share três',
						date: '02/01/2021',
						content: 'Bla Bla Bla Bla Bla Bla Bla',
					},
				])
			}, 1000);
		})

		// let endpoint = 'notes'
		
		// return apiService.request(`${API_URL}/${endpoint}`, 'GET',
		// 	{
		// 		'Content-Type': 'application/json',
		// 		'Authorization': 'Bearer ' + token
		// 	})
		// 	.then((responseApi) => {

		// 		if (responseApi.error) {
		// 			console.log('ERRO_NOTAS', responseApi);
		// 			return {
		// 				ok: false,
		// 				user: {},
		// 				message: responseApi.error.message
		// 			}
		// 		}
		// 		console.log('GetMyNotes',responseApi);
		// 		return responseApi;
		// 	})
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