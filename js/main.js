const omdbData = ['0083658','0110912','0137523','0816692','0169547','1396484','0050976','0062622','2737304',
'0088847','2356777','1442462','1305826','0096697','3205802','5753856','4574334','0108778','0106179','0149460'];
let data = [];
window.onload = () =>{
    getData(omdbData)
}
const getData = (omdbData) =>{
console.log(omdbData)
    for (let i = 0; i < omdbData.length; i++) {        
        let url = `http://www.omdbapi.com/?i=tt${omdbData[i]}&apikey=a963a012`
        fetch(url)
            .then(response => response.json())
            .then((out) => {
                if (out.Response === "True") {
                    data.push(out);
                }
            })
            .catch(error => { throw error });
    }
  /*const showData = (data) => {
    let allData = '';
      data.forEach(element => { 
        return allData += `<div>
             <p>Title: ${element.Title}</p>
             <p>Year: ${element.Year}</p>
             <p> Genre: ${element.Genre}</p>
             <p> Runtime: ${element.Runtime}</p>
             <p> Plot: ${element.Plot}</p>
             <p> Tipo: ${element.Type}</p>
             <p> Id: ${element.imdbID}</p>
          </div>`
      });
      document.getElementById('root').innerHTML = allData;*/
  };
document.getElementById('play').addEventListener('click', () =>{
    const entryAplication = document.getElementById('entry-aplication');
    entryAplication.classList.add('hide');
    const options = document.getElementById('options');
    options.classList.add('show');
  });
  document.getElementById('menos-30-min').addEventListener('click', () =>{
      const textExplication = document.getElementById('text-explication');
      textExplication.classList.add('hide'); 
      const root = document.getElementById('root');
      root.classList.add('show');
      let condition = document.getElementById('menos-30-min').value;
      let filtered = window.movies.filterTime(data, condition);
      let filteredTime = '';
      filtered.forEach(element => {
      return filteredTime += `<div>
      <div>
      <p>Title: ${element.Title}</p>
      <p>Year: ${element.Year}</p>
      <p> Genre: ${element.Genre}</p>
      <p> Runtime: ${element.Runtime}</p>
      <p> Plot: ${element.Plot}</p>
      <p> Tipo: ${element.Type}</p>
      <p> Id: ${element.imdbID}</p>
      </div>
      </div>`
    });
    document.getElementById('root').innerHTML = '';
    document.getElementById('root').innerHTML = filteredTime;
    });
  document.getElementById('30-60min').addEventListener('click', () =>{
      const textExplication = document.getElementById('text-explication');
      textExplication.classList.add('hide'); 
  });
  document.getElementById('1-2horas').addEventListener('click', () =>{
      const textExplication = document.getElementById('text-explication');
      textExplication.classList.add('hide'); 
  });
  document.getElementById('más-2-horas').addEventListener('click', () =>{
      const textExplication = document.getElementById('text-explication');
      textExplication.classList.add('hide'); 
  });
