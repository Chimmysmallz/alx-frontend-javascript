function getResponseFromAPI(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(`Error fetching data from API. Status code: ${xhr.status}`);
      }
    };
    xhr.onerror = () => {
      reject("Error fetching data from API. Please try again later.");
    };
    xhr.send();
  });
}
