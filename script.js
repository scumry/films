const films = document.querySelector('.films')
const posting = (film) => {
    const filmDiv = document.createElement('div')
    filmDiv.classList.add('film')
    filmDiv.innerHTML =
        `<h2>Название фильма: ${film.title}</h2>
        <p>Фильм создан: ${film.created}</p>
        <p>Продюсер: ${film.producer}</p> 
        `
    films.append(filmDiv)
}   
const filmLoading = () => {
    const divLoading = document.createElement('div')
    divLoading.classList.add('load')
    divLoading.innerHTML =
        `<div class="load">load</div>`

    films.append(divLoading)
}
const loader = () => {
    const delLoad = document.querySelector('.load')
    loader.innerHTML = ''
}
const errorl = () => {
    const lerrDiv = document.createElement('div')
    lerrDiv.classList.add('error')
    lerrDiv.innerHTML =
        `Ошибка загрузки`
    films.append(lerrDiv)
}

const post = async () => {
    filmLoading()
    try {
        const films = await fetch("https://swapi.dev/api/films")
        const puto = await films.json()
        output = puto.results.map(films => posting(films))
    } catch (error) {
        errorl()
    } finally {
        loader()
    }
}
post()