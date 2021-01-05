export const apiService = {

	request(url, methodRequest = 'GET', headersRequest = {}, body = {}) {

		if (methodRequest === 'GET') {

			return fetch(url, {
				headers: headersRequest,
			})
				.then(async response => {
					if (!response.ok) {
						const responseErrorServer = await response.json();
						const errorObj = Error(responseErrorServer.message);
						throw errorObj;
					}

					return await response.json();
				})
				.catch((err) => {
					return ({ error: err })
				})
		} else {

			const bodyRequest = JSON.stringify(body)

			return fetch(url, {
				method: methodRequest,
				headers: headersRequest,
				body: JSON.stringify(body) 
			})
				.then(async response => {
					if (!response.ok) {
						const responseErrorServer = await response.json();
						const errorObj = Error(responseErrorServer.message);
						console.log(errorObj);
						throw errorObj;
					}

					return await response.json();
				})
				.catch((err) => {
					return ({ error: err })
				}
				)
		}
	}
}