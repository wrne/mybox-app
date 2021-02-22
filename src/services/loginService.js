import { API_URL } from '../config.js'
import { apiService } from './apiService'
import auth from '@react-native-firebase/auth';


export const LoginService = {

	// login(email, password, msgContext, dispatch, history) {
	async login(email, password) {


		try {
			
			const user = await auth().signInWithEmailAndPassword(email, password);
			console.log('LOGIN_SERVICE',user);
			return user;
			
		} catch (error) {
			throw new Error('Falha no login.\n'+error)
		}
		// return new Promise((resolve) => {

		// 	setTimeout(() => {
		// 		resolve(
		// 			{
		// 				token: '1l23h4b1l2h341lj2v3412349gasdfgasigr4',
		// 				user: {
		// 					name: 'Wanderley Neto',
		// 					email: 'wneto_ramos@hotmail.com'
		// 				}
		// 			}
		// 		)
		// 	}, 1000);

		// })

		/*
				return apiService.request(`${API_URL}/sessions`, 'POST', { 'Content-Type': 'application/json', }, login)
					.then(responseApi => {
		
						// Verificando erro
						if (responseApi.error) {
		
							// msgContext.setMsg('Falha no login do usuário');
							console.log('Erro autenticação:',responseApi);
							return false;
		
						}
		
						// return { token: responseApi.token };
						// dispatch( NotesThunkActions.setNewToken(responseApi.token) );
						// msgContext.setMsg('Usuário logado com sucesso!');
						
						return true;
		
					})
					.catch(() => { return false });
		*/
	}
}