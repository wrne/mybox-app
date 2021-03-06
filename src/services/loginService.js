import { API_URL } from '../config.js'
import { apiService } from './apiService'
import auth from '@react-native-firebase/auth';

export const LoginService = {


	login: async (email, password) => {

		try {

			await auth().signInWithEmailAndPassword(email, password);

		} catch ({ code }) {

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
			throw 'Falha no logout.'
		}
	},


	validUser: async (setUser, setLoading,) => {

		function onAuthStateChanged(user) {
			console.log('AuthStateChanged...', user);
			setUser(user);
			setLoading(false);
		}

		auth().onAuthStateChanged(onAuthStateChanged);
		console.log('Função para validar usuário');
	},

	async createUser({ email, password, name, phone, personalId }) {

		console.info(`Name: ${name}`);
		console.info(`Email: ${email}`);
		console.info(`Password: ${password}`);

		try {
			
			await auth().createUserWithEmailAndPassword(email, password);

		} catch (error) {

			if (code == 'auth/email-already-in-use') {
				throw 'Email já foi usado em outra conta.'
			}

			if (code == 'auth/invalid-email') {
				throw 'Endereço de email inválido.'
			}

			if (code == 'auth/operation-not-allowed') {
				throw 'Operação não permitida.'
			}

			if (code == 'auth/weak-password') {
				throw 'Senha não é forte o bastante.'
			}

			throw 'Falha ao criar novo usuário.\nTente novamente mais tarde';

		}

	},

	async updateUser({email, password, name, phone, personalId}) {
		
		const user = auth().currentUser;
		console.log('UPDUSER_SERVICE',user);

		let dataUpdateProfile = {};

		if (name) dataUpdateProfile.displayName = name;
		if (phone) dataUpdateProfile.phoneNumber = phone;
		
		try {

			await user.updateProfile(dataUpdateProfile)
			// await user.updatePhoneNumber(dataUpdateProfile)
// 
		} catch (error) {

			console.log('UPDUSER_SERVICE_ERROR',error);
			throw 'Falha ao atualizar o usuário.\nTente novamente mais tarde.'

		}
	}

}