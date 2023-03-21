const getResponseFromAPI = () => {
  return new Promise((resolve, reject) => {
    // Make an API call
    const response = callAPI();
    if (response) {
      resolve(response);
    } else {
      reject(Error('API call failed'));
    }
  });
};
