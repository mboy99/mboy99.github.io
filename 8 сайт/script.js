function searchFilm(){
    let searchText=document.getElementById("search").value
       let movies=document.getElementById("movies")
    if(!searchText){
        alert("Поле поиска не должно быть пустым!")
        return
    }
    fetch('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='+searchText, {
    method: 'GET',
    headers: {
        'X-API-KEY': '26ec0df0-739c-47c4-8c35-c50a5fd3947d',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json =>renderFilms(json.films,movies))
    .catch(err => console.log(err))
}
const form = document.getElementById('searchF');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });
  function renderFilms(films,movies){
    movies.innerHTML=''
    if (films.length === 0){
      movies.innerHTML = '<p class="no-results">Ничего не найдено</p>'
    }
    films.forEach(movie=>{
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.id=movie.filmId ||movie.kinopoiskId
      card.innerHTML = `
      <img src="${movie.posterUrl || 'https://placehold.co/300x450'}"/>
      <div class="info">
      <h4>${movie.nameRu || movie.nameEn || 'Без названия'}</h4>
      <p>Год: ${movie.year || 'Не указан'}</p>
      <p>Рейтинг: <strong>${movie.rating || movie.ratingKinopoisk || 'нет'}</strong></p>
      </div>
      `;
      movies.appendChild(card)
      card.addEventListener('click', () => add_click(movie.filmId ||movie.kinopoiskId));
    })
  }
    window.onload=function(){
    let movies=document.getElementById("popular")
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1', {
    method: 'GET',
    headers: {
        'X-API-KEY': '26ec0df0-739c-47c4-8c35-c50a5fd3947d',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json =>renderFilms(json.items,movies))
    .catch(err => console.log(err))
    
   let movies2=document.getElementById("family")
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=FAMILY&page=1', {
    method: 'GET',
    headers: {
        'X-API-KEY': '26ec0df0-739c-47c4-8c35-c50a5fd3947d',
        'Content-Type': 'application/json',
    },
})

    .then(res => res.json())
    .then(json =>renderFilms(json.items,movies2))
    .catch(err => console.log(err))
    
     let movies3=document.getElementById("zombie")
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=ZOMBIE_THEME&page=1', {
    method: 'GET',
    headers: {
        'X-API-KEY': '26ec0df0-739c-47c4-8c35-c50a5fd3947d',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json =>renderFilms(json.items,movies3))
    .catch(err => console.log(err))
    }

    const modal = document.getElementById("movie-modal");
    const closeModal = document.getElementById('close-modal');

    const modalTitle = document. getElementById('modal-title');
    const modalYear = document.getElementById("modal-year");
    const modalRating = document.getElementById("modal-rating")
    const modalDescription = document.getElementById("modal-description");
    const modalPoster = document.getElementById("modal-poster");

async function add_click(id){
  console.log(id)
  idVideo=id
  modal.style.display="flex"
  const videosContainer = document.getElementById('traylers')
    videosContainer.innerHTML = '';
    const sitesContainer = document.getElementById('sites')
    sitesContainer.innerHTML = '';
  try{
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        headers: {
            'X-API-KEY': '26ec0df0-739c-47c4-8c35-c50a5fd3947d',
        'Content-Type': 'application/json',
        }
    })

    const data = await response.json();

    modalTitle.textContent = data.nameRu || data.nameOriginal || 'Без названия';
    modalYear.textContent = data.year || 'Не указн';
    modalRating.textContent = data.ratingKinopoisk || 'Нет';
    modalDescription.textContent = data.description || 'Описание отсутствует.';
    modalPoster.src = data.posterUrl || 'https://placehold.co/300x450';
    modalPoster.alt = data.nameRu || 'Постер'
  } catch (err) {
    console.error('Ошибка:', err);
    alert('Не удалось загрузить информацию о фильмею');
  }
}
function closeModalWindow(){
    modal.style.display = 'none';
}

closeModal.addEventListener('click', closeModalWindow);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalWindow();
});

let idVideo = 0;
async function displayVideo(){
    const videosContainer = document.getElementById('traylers')
    videosContainer.innerHTML = '';
    videosContainer.style.display = 'block'

    try {
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${idVideo}/videos`, {
            headers: {
                'X-API-KEY': '26ec0df0-739c-47c4-8c35-c50a5fd3947d',
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Ошибка загрузки видео');
        }

        const data = await response.json();
        console.log (data)
        if (!data.items || data.items.length === 0) {
            videosContainer.innerHTML = '<p>Видео не найдены.(Федя казявка)</p>';
            return;
        }
        data.items.forEach(item => {
            const name = item.name || 'Без названия';
            const site = item.site || 'Неизвестно';

            const link = document.createElement ('a');
            link.href = item.url;
            link.target='_blank';
            link.className = 'video-link';
            link.innerHTML=`
            <strong>${name}</strong>
            <span>Источник: ${site} -> Перейти</span>
            `;

            videosContainer.appendChild(link);
        })
    }
    catch(err){
        console.log(err)
    }
}

async function whereWatch(){
    const sitesContainer = document.getElementById('sites')
    sitesContainer.innerHTML = '';
    sitesContainer.style.display = 'block'

    try {
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${idVideo}/external_sources`, {
            headers: {
                'X-API-KEY': '26ec0df0-739c-47c4-8c35-c50a5fd3947d',
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Ошибка загрузки видео');
        }

        const data = await response.json();
        console.log (data)
        if (data.items.length == 0){
            sitesContainer.innerHTML="<p> Информация не найдена(федя какашка) </p>"
            return
        }
        data.items.forEach(movie=>{
            const card = document.createElement('div');
            card.className = 'site-card';
            card.innerHTML = `
            <img src="${movie.logoUrl || 'https://plachold.co/300x450'}"/>
            <div class="info">
            <h4>${movie.platform || 'Без названия'}</h4>
            <a href="${movie.url || 'Не указоно'}">Ссылка</a>
            </div>
            `;
            sitesContainer.appendChild(card)
        })
    }
    catch(err){
        console.log(err)
    }
}