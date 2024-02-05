import "./style.css";
import { DOMselectors } from "./dom";

const API = "https://api.quotable.io/quotes";

async function getData(API) {
    try {
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        createCard(data.results);
    } catch (error) {
        console.error(error);
        errorMessage('Error 404: Youre done');
    }
}

getData(API);

function createCard(arr) {
    arr.forEach((item) => {
        DOMselectors.container.insertAdjacentHTML("beforeend", 
        `
        <div class="card">
         
            <h5 class="description">${item.content}</h5>
        </div>`
        );
    });
}

function clearCards() {
    DOMselectors.container.innerHTML = '';
}

function errorMessage(message) {
    alert(message);
}

DOMselectors.form.addEventListener("submit", async function (event) {
    event.preventDefault();
    findMaps(DOMselectors.input.value);
    DOMselectors.input.value = "";
    clear();
  });

  /* <h2 class="name">${item.author}</h2> */