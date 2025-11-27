async function getMovies(e) {
    e.preventDefault();
    let text = document.getElementById('myText');
    let title = document.getElementById('Cerca').value;
    let imdbID;
    let Poster;
    const apikey = "abdfd060"
    const url = `http://www.omdbapi.com/?&apikey=${apikey}&s=${title}`;
    try {
      const response = await fetch(url) //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      .then((res) => {

        if (!res.ok)
        throw new Error(`Response status: ${res.status}`);

        return res.json();
      });

      text.textContent = JSON.stringify(response, null, 2);
      imdbID = response.Search.imdbID; // imdbID is currently an object containig all the id's
      Poster = response.Search.Poster;
      } 
    catch (error) {
        console.error(error.message);
    }

    //console.log("dopo esecuzione");
    //console.log(response);

// - - - - - -  - - -  - - - -  - -

const urlID = `http://www.omdbapi.com/?&apikey=${apikey}&i=${imdbID}`;

imdbID.forEach(movie => {
  const imageURL = movie.Poster;
  const title = movie.Title;
  const year = movie.Year;
  const type = movie.Type;
});

  // OMDB uses 'Poster' for the image URL
  

/*try {
  const response = await fetch(urlID)
  .then((res) => {

    if (!res.ok)
    throw new Error(`Response status: ${res.status}`);

    return res.json();
  });

  } 
catch (error) {
    console.error(error.message);
 }
*/

  }