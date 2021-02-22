import React, {createContext, useState, useContext} from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {

	const [message, setNewMessage] = useState('');

	function setMessage(text){
		setNewMessage(text);

		setTimeout(() => {
			setNewMessage('');
		}, 3000);
	}

	return(
		<MessageContext.Provider value={{message, setMessage}}>
			{children}
		</MessageContext.Provider>
	)
}

export function useMessages(){
	
	return useContext(MessageContext);

}