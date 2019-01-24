/*document.getElementById('search_btn').addEventListener('click', function(){
	let title = document.getElementById('title_text').value;
	let request = new Request(`http://www.omdbapi.com/?s=${title}&y=&plot=short&tomatoes=true&apikey=e861c11a`);
	let f = fetch(request).then(function(result){
		return result.json();
    })
.then(function(data){
	document.getElementById('search_result').innerHTML= '';
	const searchEl = document.getElementById('search_result');
        for(let i = 0; i < data.Search.length; i++){
			const movieContainer = document.createElement('div');
			movieContainer.className = 'search-result--item';
			const titleEl = document.createElement('div');
			titleEl.innerText = data.Search[i].Title;
			const yearEl = document.createElement('div');
			yearEl.innerText = data.Search[i].Year;
			const typeEl = document.createElement('div');
            typeEl.innerText = data.Search[i].Type;
            const runtimeEl = document.createElement('div');
			runtimeEl.innerText = data.Search[i].imdbID;
			const posterEl = document.createElement('img');
            posterEl.src = data.Search[i].Poster;
			movieContainer.appendChild(posterEl);
			movieContainer.appendChild(titleEl);
			movieContainer.appendChild(yearEl);
            movieContainer.appendChild(typeEl);
            movieContainer.appendChild(runtimeEl);
			searchEl.appendChild(movieContainer);
		}
    });
});*/
const entry = document.getElementById('play').addEventListener('click', () =>{
  const entryAplication = document.getElementById('entry-aplication');
  entryAplication.classList.add('hide');
  const options = document.getElementById('options');
  options.classList.add('show');
});
const optionMin30min = document.getElementById('menos-30-min').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
    const root = document.getElementById('root');
    root.classList.add('show')
     
  });
const option30a60min = document.getElementById('30-60min').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
});
const option1a2horas = document.getElementById('1-2horas').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
});
const optionMax2horas = document.getElementById('más-2-horas').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
});

