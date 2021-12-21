// fetch from an API endpoint
//cycle through the API object with maps and inject into dom  

const fetcher = async () => {
  const choo = await fetch('http://api.mediastack.com/v1/news?access_key=06109dda4462eb4a60f9ea4a2b1ba2ad&sources=en')
  const doo = await choo.json()
  return doo
}
let main = document.querySelector('.blogs')


fetcher()
.then(e => blog = e.data)
.then(blog => blog.map(el => {
  const html = `
  <div class="card">
      <div class="card__img">
        <img src="${el.image}" alt="#" id="card__img-1">
      </div>
      <div class="card__desc">
        <h2 class="desc__title">${el.title}</h2>
        <p class="desc__text">
        ${el.description}
        </p>
        <a href="${el.url}" target="_blank" class="desc__btn">Read more</a>
      </div>
    </div>
  `
  main.insertAdjacentHTML('beforeend', html)
}))