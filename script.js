// fetch from an API endpoint
//cycle through the API object with maps and inject into dom  

const fetcher = async () => {
  const choo = await fetch('https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2021-12-21&' +
  'sortBy=popularity&' +
  'apiKey=88739766be344c619fa982da0f21a109')
  const doo = await choo.json()
  return doo
}
let main = document.querySelector('.blogs')


fetcher()
.then(e => blog = e.articles)
.then(blog => blog.map(el => {
  const html = `
  <div class="card">
      <div class="card__img">
        <img src="${el.urlToImage}" alt="#" id="card__img-1">
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
.catch(err => console.log(err.message))
