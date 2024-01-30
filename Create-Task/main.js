
const API = "https://api.quotable.io/quotes";

async function getData(API) {
    try {
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        createCard(data.data);
    } catch (error) {
        console.error(error);
        errorMessage('Error 404: Youre done');
    }
}

getData(API);
