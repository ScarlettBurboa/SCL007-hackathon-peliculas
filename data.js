window.movies = {
  filterGenre: (data, condition) =>{
    const filteredGenre = data.filter(element => {
      return element.Genre.includes(condition,0)
    });
    return filteredGenre;
  }
}
