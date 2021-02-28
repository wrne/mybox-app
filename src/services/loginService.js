import { API_URL } from '../config.js'
import { apiService } from './apiService'
import auth from '@react-native-firebase/auth';

export const LoginService = {

	// login(email, password, msgContext, dispatch, history) {
	login: async (email, password) => {

		try {

			await auth().signInWithEmailAndPassword(email, password);

		} catch ({code}) {

			if (code === 'auth/user-not-found') {
				throw 'Usuário não encontrado!'
			}

			if (code === 'auth/invalid-email') {
				throw 'O endereço de email é inválido!'
			}

			if (code === 'auth/wrong-password') {
				throw 'Senha incorreta!'
			}
		}
	},

	logout: async () => {

		try {
			await auth().signOut()

		} catch (error) {
			throw new Error('Falha no logout.\n')
		}
	},


	validUser: async (setUser, setLoading, ) => {

		function onAuthStateChanged(user) {
			console.log('AuthStateChanged...',user);
			setUser(user);
			setLoading(false);
		}

		auth().onAuthStateChanged(onAuthStateChanged);
		console.log('Função para validar usuário');
	},

	updateUser: (dataUpdate) => {
		const user = auth.currentUser;

		user.updateProfile(dataUpdate)
			.then(() => {
				alert('Usuário atualizado!');
			})
			.catch(() => {
				alert('Falha ao atualizat o usuário...')
			})
	}

}