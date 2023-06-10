
export const paintFlags = (array) => {
    const section = document.querySelector('section');
    array.forEach(e => {
        section.innerHTML += `<article>
                                <img src="${e.flags.png}" alt="">
                                <div class="infoFlags">
                                    <h4>${e.name.common}</h4>
                                    <h4>Población: ${e.population} habitantes</h4>
                                    <h4>Región: ${e.region}</h4>
                                    <h4>Capital: ${e.capital}</h4>
                                </div>
                                <button><a href="./pages/flags.html?cca3=${e.cca3}">More</a></button>
                            </article>`
    });
}

const createButons = (array) => {
    const divButtons = document.querySelector('.divButtons');
    array.map(string => {
        divButtons.innerHTML += `<a href="./flags.html?cca3=${string}"><button> ${string}</button></a>`
    });
}


export const paintOneFlags = (array) => {
    const section = document.querySelector('section');
    array.forEach(e => {
        section.innerHTML += `<article class="sectionFlags">
                                    <img src="${e.flags.png}" alt="" class="imgOne">
                                    <div class="infoFlags">
                                        <h4>${e.name.common}</h4>
                                        <h4>Native Name: ${e.name.official}</h4>
                                        <h4>Población: ${e.population} habitantes</h4>
                                        <h4>Región: ${e.region}</h4>
                                        <h4>Sub Región: ${e.subregion}</h4>
                                        <h4>Capital: ${e.capital}</h4>
                                        <h4>Moneda: ${(Object.values(e.currencies))[0].name}</h4>
                                        <h4>idiomas: ${Object.values(e.languages)}</h4>
                                        <div class="divButtons"><h4>frontera:</h4></div>
                                    </div>
                                </article>`
        createButons(e.borders);
    });
}

export const pais = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


export const paintAgaing = () =>{
    let stringNombraPais='';
    buscador.addEventListener('keydown', async (event) =>{
        stringNombraPais+=event.key
        let urlBuscar = `https://restcountries.com/v3.1/name/${stringNombraPais}`;
        if (stringNombraPais.length>1) {
            const arrayPais= await pais2(urlBuscar);
            const section = document.querySelector('section');
            section.innerHTML=''
            paintFlags(arrayPais)
        }
    });
    
}


export const pais2 = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

