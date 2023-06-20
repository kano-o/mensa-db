export const prerender = true

const date = new Date();
const dateString = date.toISOString().slice(0, 10);

const endpoint = 'https://sls.api.stw-on.de/v1/locations/101/menu/' + dateString;

let responseMeals = [];

const response = await fetch(endpoint);
const data = await response.json();
//console.log(data);
responseMeals = data;

const mealsArr = responseMeals.meals;

let htmlString = '';
for (let i = 0; i < mealsArr.length; i++) {
    htmlString += mealsArr[i].name + '\n';
}
console.log(htmlString);
export function load() {
    return {
        htmlString
    };
}