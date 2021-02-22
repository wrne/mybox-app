import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import {useAuth} from '../contexts/auth.context'
import AppRoutes from './app.routes.js';
import AuthRoutes from './auth.routes.js';

export default function Routes() {
	
	const { signed, loading } = useAuth();
	
	if (loading) {
		
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#666"></ActivityIndicator>
			</View>
		)
	} else {

		return signed ? <AppRoutes /> : <AuthRoutes />
	}

};