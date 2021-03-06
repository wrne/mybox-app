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

		const subscriber = LoginService.validUser(setUser, setLoading)

		// return subscriber; // unsubscribe on unmount

	}, []);

	async function logIn(email, password) {

		try {
			if (!email || !password) {
				throw 'Usuário ou senha não informados.'
			}
			await LoginService.login(email, password);

		} catch (error) {
			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
			return

		}
	};

	async function logOut() {

		await LoginService.logout();

	};

	async function createUser(newUser) {
		
		try {

			await LoginService.createUser(newUser);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
		
		}
	}
	
	async function updateUser({email, password, name, phone, personalId}) {

		let user = {};

		// Define propriedade alteradas do usuário
		if (name) user.name = name;
		if (password) user.password = password;
		if (email) user.email = email;
		if (phone) user.phone = phone;
		if (personalId) user.personalId = personalId;

		try {

			await LoginService.updateUser(user);

		} catch (error) {

			// Tratar erros com base nos códigos
			Alert.alert('Ops...', '' + error)
			return
		}
	}

	return (
		<AuthContext.Provider value={{ signed: !!user, user, loading, logIn, logOut,createUser, updateUser }}>
			{children}
		</AuthContext.Provider>
	)

};

export function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

