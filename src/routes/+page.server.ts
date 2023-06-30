export const prerender = true

const date = new Date();
const dateString = date.toISOString().slice(0, 10);

const mensaIDs = [101, 105, 111];

const htmlString:string[][] = [[], [], []];
let stringIndex = 0;

for (const mensaID of mensaIDs) {

    const endpoint = 'https://sls.api.stw-on.de/v1/locations/' + mensaID + '/menu/' + dateString;

    let responseMeals = [];

    const response = await fetch(endpoint);
    responseMeals = await response.json();

    const mealsArr = responseMeals.meals;

    for (let i = 0; i < mealsArr.length * 2; i+=2) {
        htmlString[stringIndex][i] = mealsArr[i/2].name;
        htmlString[stringIndex][i+1] = mealsArr[i/2].price.student;
    }
    stringIndex++;
}

export function load() {
    return {htmlString};
}
