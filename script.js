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
    .then((dataAlbum) => {
      console.log(dataAlbum), createCardAlbum(dataAlbum);
    })
    .catch((err) => console.log(err));
};

// getSongs();

const createCardAlbum = (dataAlbum) => {
  let albumContainer = document.getElementById("album-area");
  let jsonAlbumsArray = dataAlbum.data;
  for (let i = 0; i < jsonAlbumsArray.length; i++) {
    const singleAlbum = jsonAlbumsArray[i];
    // ul.innerHTML += `<li><img src="${singleAlbum.album.cover_big}">  <span>Title: ${singleAlbum.album.title}</span>`;

    albumContainer.innerHTML += `
    <div class="card">
        <img src="${singleAlbum.album.cover_big}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${singleAlbum.album.title}</h5>
        </div>
    </div>
    `;
  }
};

window.onload = () => {
  getSongs();
};
