//getMovies();
async function getMovies(e) {
    e.preventDefault();
    let text = document.getElementById('myText').innerText;
    let title = document.getElementById('Cerca').value;
    const apikey = "abdfd060"
    const url = `http://www.omdbapi.com/?&apikey=${apikey}&s=${title}`;
    try {
      const response = await fetch(url) //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      .then((res) => {

        if (!res.ok)
        throw new Error(`Response status: ${res.status}`);

        return res.json();
      });
      text = JSON.stringify(response, null, 2);
      var imdbID = response.imdbID; 
      } 
    catch (error) {
        console.error(error.message);
    }
    console.log("dopo esecuzione");
    console.log(response);
  }