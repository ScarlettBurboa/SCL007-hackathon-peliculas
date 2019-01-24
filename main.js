const omdbData = ['0083658','0110912','0137523','0816692','0169547','1396484','0050976','0062622','2737304',
'0088847','2356777','1442462','1305826','0096697','3205802','5753856','4574334','0108778','0106179','0149460'
];

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

/*
const selectGenre = document.getElementById('genre');

selectGenre.addEventListener('change', ()=> {
  let condition = selectGenre.options[selectGenre.selectedIndex].value;
  let filtered = window.movies.filterGenre(data, condition);
  let filteredData = '';
  filtered.forEach(element => {
    return filteredData += `<div>
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
  document.getElementById('root').innerHTML = filteredData;
  return datafiltered = filtered
});
*/
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
