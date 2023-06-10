
export const paintFlags = (array) => {
    const section = document.querySelector('section');
    array.forEach(e => {
        section.innerHTML += `<article>
                                <img src="${e.flags.png}" alt="">
                                <div class="infoFlags">
                                    <h4>${e.name.common}</h4>
                                    <h4>Población: ${e.population}</h4>
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
        divButtons.innerHTML += `<button><a href="./flags.html?cca3=${string}">${string}</a></button>`
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