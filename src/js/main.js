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
    getData(omdbData);   
  });
document.getElementById('30-60min').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
    const omdbData = ['0248654','0098936','0248654','0052520','3205802','1796960','1442462','2356777','0903747','0944947'];
    getData(omdbData);  
});
document.getElementById('1-2horas').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
    const omdbData = ['2582802','0078748','5311514','1049413','0081846','2085059','0384766','0266697','1285016','2120120'];
    getData(omdbData); 
});
document.getElementById('más-2-horas').addEventListener('click', () =>{
    const textExplication = document.getElementById('text-explication');
    textExplication.classList.add('hide'); 
    const omdbData = ['0111161','0110912','1375666','0816692','0317248','0245429','0119698','0081505','0169547','3748528'];
    getData(omdbData); 
});

let data = [];

window.onload = (omdbData) =>{
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
                showData(data);
                console.log(data)
            })
            .catch(error => { throw error });
    }

  const showData = (data) => {
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
      document.getElementById('root').innerHTML = allData;
  };

const selectTime = document.getElementById('time');

selectTime.addEventListener('change', ()=> {
  let condition = selectTime.options[selectTime.selectedIndex].value;
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
  document.getElementById('root').innerHTML = filteredTime;
});
}


