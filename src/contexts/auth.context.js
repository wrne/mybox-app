import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {LoginService} from '../services/loginService'

export const AuthContext = createContext(
);

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadStoragedData() {

			storagedUser = await AsyncStorage.getItem('@myBoxAuth:user');
			storagedToken = await AsyncStorage.getItem('@myBoxAuth:token');

			console.log('Carregando context...');
			// // retirar apos teste...
			await setTimeout(() => console.log('Carregando context apos 2 segundos...'), 5000)

			if (storagedUser && storagedToken) {

				setUser(JSON.parse(storagedUser));
				
			}
		}
		loadStoragedData();
		setLoading(false);

	}, []);

	async function logIn(email, password) {

		const response = await LoginService.login(email, password);
		const { token, user } = response;

		setUser(response.user);

		console.log('LogIn',response);
		
		await AsyncStorage.setItem('@myBoxAuth:user', JSON.stringify(response.user));
		await AsyncStorage.setItem('@myBoxAuth:token', response.token);

		
		if (response.user){
			console.log('Autenticado! token:',resultLogin);
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

	console.log('Context');
	return (
		<AuthContext.Provider value={{ signed: !!user, user, loading, logIn, logOut }}>
			{children}
		</AuthContext.Provider>
	)

};

