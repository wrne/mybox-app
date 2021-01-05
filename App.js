import React from 'react';
import Routes from './src/routes'
import { AuthProvider } from './src/contexts/auth.context'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	
	return (
		<AuthProvider>
			<NavigationContainer>
				<Routes />
			</NavigationContainer>
		</AuthProvider>
	);
};
