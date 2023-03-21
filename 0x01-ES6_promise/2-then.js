function handleResponseFromAPI(promise) {
    promise
        .then(res => {
            return {
                status: 200,
                body: 'success'
            }
        })
        .catch(err => {
            return new Error();
        })
        .then(res => {
            console.log('Got a response from the API');
        })
}
