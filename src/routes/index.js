import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {AuthContext} from '../contexts/auth.context'
import AppRoutes from './app.routes.js';
import AuthRoutes from './auth.routes.js';

export default function Routes() {
	
	const { signed, loading } = useContext(AuthContext);
	
	if (loading) {
		console.log('Loading....');
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#666"></ActivityIndicator>
			</View>
		)
	} else {

		return signed ? <AppRoutes /> : <AuthRoutes />
	}

};