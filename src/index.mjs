import "./styles.css";
fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20", {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b106591befmsh638334a8eba0f6ap12c5ecjsn36452def996c',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data => {
  const list = data.d;

  list.map((item) => {
    const name = item.l;
    const poster = item.i.imageUrl;
    const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
    document.getElementById("app").innerHTML += movie;
  })
})
.catch(err => {
  console.log(err);
})
