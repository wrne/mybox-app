import React from 'react';
import Routes from './src/routes'
import { AuthProvider } from './src/contexts/auth.context'
import { MessageProvider } from './src/contexts/message.context'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

	return (
		<MessageProvider>
			<AuthProvider>
				<NavigationContainer>
					<Routes />
				</NavigationContainer>
			</AuthProvider>
		</MessageProvider>
	);
};
