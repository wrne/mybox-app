import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { LoginService } from '../services/loginService';
import { useMessages } from './message.context';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const { setMessage } = useMessages();

	useEffect(() => {
		async function loadStoragedData() {

			storagedUser = await AsyncStorage.getItem('@myBoxAuth:user');
			storagedToken = await AsyncStorage.getItem('@myBoxAuth:token');

			if (storagedUser && storagedToken) {

				setUser(JSON.parse(storagedUser));

			}
		}
		loadStoragedData();
		setLoading(false);

	}, []);

	async function logIn(email, password) {
		let reponse = {};

		try {
			if (!email || !password) {
				throw new Error('Usuário ou senha não informados.')
			}

			response = await LoginService.login(email, password);

		} catch (error) {

			Alert.alert('Deu ruim na autenticação...', 'Parece que ocorreu algum erro. Veja a mensagem que recebemos:' + error)
			return

		}

		const { token, user } = response;

		setUser(response.user);
		console.log('LOGIN', response);

		await AsyncStorage.setItem('@myBoxAuth:user', JSON.stringify(response.user));
		await AsyncStorage.setItem('@myBoxAuth:token', response.user.uid);


		if (response.user) {
			console.log('Autenticado! token:', resultLogin);

		} else {
			console.log('Deu ruim na autenticação...')
		}
	};

	function logOut() {

		AsyncStorage.clear()
			.then(() => {
				setUser(null);
			})

	};


	return (
		<AuthContext.Provider value={{ signed: !!user, user, loading, logIn, logOut }}>
			{children}
		</AuthContext.Provider>
	)

};

export function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

