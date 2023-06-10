import { paintOneFlags, pais } from "../utils/funciones.js";

const x = window.location.search;
const y = new URLSearchParams(x);
const cca3 = y.get('cca3');

let urlFromApi = `https://restcountries.com/v3.1/alpha?codes=${cca3}`;

const inicial = async () => {

    const arrayCountries = await pais(urlFromApi);
    
    paintOneFlags(arrayCountries);

}
inicial();
