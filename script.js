//url link for deezer https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica
// strive api deezerurl https://striveschool-api.herokuapp.com/api/deezer/search

//fetch API
const getSongs = () => {
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=pinkfloyd",
    {
      method: "GET",
      // headers: {
      //   "X-RapidAPI-Key": "a1fdf9e2acmsh540c02662ac45b2p120069jsnb74ea4c691f0",
      //   "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      // },
    }
  )
    .then((rawAlbums) => {
      return rawAlbums.json();
    })
    .then((jsonAlbums) => {
      console.log(jsonAlbums.data);

      let ul = document.querySelector("ul");
      for (let i = 0; i < jsonAlbums.data.length; i++) {
        const singleAlbum = jsonAlbums.data[i];
        // let li = document.createElement("li");
        // li.innerText = singleAlbum.title;
        // ul.appendChild(li);
        ul.innerHTML += `<li><img src="${singleAlbum.md5_image}">  <span>Title: ${singleAlbum.title}</span>`;
      }
    })
    .catch((err) => console.log(err));
};

getSongs();
