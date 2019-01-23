let data = [];
for(i=1; i<=50; i++){
    let database = `http://www.omdbapi.com/?i=tt00000${i}&apikey=a963a012`;
    fetch(database)
    .then(response => response.json())
    .then(out => {
        if(out.Response === "True"){
            data.push(out);
        };
        showData(data);
        console.log(typeof data)
    })
    .catch(error => { 
      document.getElementById('root').innerHTML = 'Error: ' + error;
    });
};
console.log(data)

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

const selectGenre = document.getElementById('genre');

selectGenre.addEventListener('change', ()=> {
  let condition = selectGenre.options[selectGenre.selectedIndex].value;
  let filtered = window.movies.filterGenre(data, condition);
  console.log(data)
  let filteredData = '';
  filtered.forEach(element => {
    return filteredData += `<div>
   <div>
     <h5>${element.Title}</h5>
       <p> Genre: ${element.Genre}</p>
       <p> Runtime: ${element.Runtime}</p>
   </div>
 </div>`
  });
  document.getElementById('root').innerHTML = filteredData;
  console.log(filteredData)
});

