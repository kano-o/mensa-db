export const prerender = true

const date = new Date();
const dateString = date.toISOString().slice(0, 10);

const mensaIDs = [101, 105, 111];

let htmlString = '';

for (const mensaID of mensaIDs) {

    const endpoint = 'https://sls.api.stw-on.de/v1/locations/' + mensaID + '/menu/' + dateString;
    console.log(endpoint);

    let responseMeals = [];

    const response = await fetch(endpoint);
    const data = await response.json();
    //console.log(data);
    responseMeals = data;

    const mealsArr = responseMeals.meals;

    for (let i = 0; i < mealsArr.length; i++) {
        htmlString += mealsArr[i].name + '\n';
    }
}

const endpointMensa1 = 'https://sls.api.stw-on.de/v1/locations/101/menu/' + dateString;
const endpoint360Grad = 'https://sls.api.stw-on.de/v1/locations/103/menu/' + dateString;
const endpointMensa2 = 'https://sls.api.stw-on.de/v1/locations/105/menu/' + dateString;



//console.log(htmlString);
export function load() {
    return {
        htmlString
    };
}
