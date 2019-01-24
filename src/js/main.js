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
  const omdbData = ['0386676','1865718','0098904','4508902','0460649','2861424','0108778','1305826','0096697','0149460'];
  let randomItem = omdbData[Math.floor(Math.random()*omdbData.length - 1)+ 1];
  getData(randomItem); 
  const buttonrefresh = document.createElement('button');
  const buttonRefreshText = document.create  
});
document.getElementById('30-60min').addEventListener('click', () =>{
  const textExplication = document.getElementById('text-explication');
  textExplication.classList.add('hide'); 
  const omdbData = ['0248654','0098936','0248654','0052520','3205802','1796960','1442462','2356777','0903747','0944947'];
  let randomItem = omdbData[Math.floor(Math.random()*omdbData.length - 1)+ 1];
  getData(randomItem); 
});
document.getElementById('1-2horas').addEventListener('click', () =>{
  const textExplication = document.getElementById('text-explication');
  textExplication.classList.add('hide'); 
  const omdbData = ['2582802','0078748','5311514','1049413','0081846','2085059','0384766','0266697','1285016','2120120'];
  let randomItem = omdbData[Math.floor(Math.random()*omdbData.length - 1)+ 1];
  getData(randomItem);
});
document.getElementById('más-2-horas').addEventListener('click', () =>{
  const textExplication = document.getElementById('text-explication');
  textExplication.classList.add('hide'); 
  const omdbData = ['0111161','0110912','1375666','0816692','0317248','0245429','0119698','0081505','0169547','3748528'];
  let randomItem = omdbData[Math.floor(Math.random()*omdbData.length - 1)+ 1];
  getData(randomItem);
});

const getData = (randomItem) =>{
  let data = [];    
    let url = `http://www.omdbapi.com/?i=tt${randomItem}&apikey=a963a012`; 
    fetch(url)
      .then(response => response.json())
      .then((out) => {
        if (out.Response === "True") {
          data.push(out);
        }
        showData(data);
        //console.log(data)
        })
      .catch(error => { throw error });
  }

const showData = (data) => {
  let allData = '';
  data.forEach(element => { 
    return allData += `<div>
    <div class="row">
      <div class="col s5">
      <img class="backgrounds" src=${element.Poster}>
      <div class="background" style="background-image: url(${element.Poster}); background-size: cover; background-position: center center; background-repeat: no-repeat; background-attachment: fixed; height:300px; width: 100%;"></div>
      </div>
      <div class="col s7">
      <div class="information">
      <p class="title">Title: ${element.Title}</p>
      <p class="runtime">Runtime: ${element.Runtime}</p>
      <p class="other-data">Year: ${element.Year}</p>
      <p class="other-data"> Genre: ${element.Genre}</p>  
      <p class="resumen"> Plot: ${element.Plot}</p>
      <p class="other-data"> Tipo: ${element.Type}</p>
      </div>
      </div>
    </div>
      </div>`
  });
    document.getElementById('root').innerHTML = allData;
};



