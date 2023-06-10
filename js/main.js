import { paintFlags, pais } from "../utils/funciones.js";

let allCountires = 'https://restcountries.com/v3.1/all'
let urlFromApi = 'https://restcountries.com/v3.1/alpha?codes=724,862,170,620';
let urlFromApiName = 'https://restcountries.com/v3.1/alpha?codes=POR,COL,ESP,VEN';


const inicial = async () => {

    const arrayCountries = await pais(allCountires);
    
    paintFlags(arrayCountries);

}
inicial();