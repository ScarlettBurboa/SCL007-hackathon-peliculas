window.movies = {
  /*filterGenre: (data, condition) =>{
    const filteredGenre = data.filter(element => {
      return element.Genre.includes(condition,0)
    });
    return filteredGenre;
  },*/
  filterTime: (data, condition) =>{
    const filteredTime = data.filter(element => {
      return element.Runtime.includes(condition,0)
    });
    return filteredTime;
  }
}
