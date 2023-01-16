//url link for deezer https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica
// strive api deezerurl https://striveschool-api.herokuapp.com/api/deezer/search

//fetch API Pink Floyd
const getSongsPinkFloyd = () => {
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
      console.log("Pink floyd ", dataAlbum), createCardAlbumPink(dataAlbum);
    })
    .catch((err) => console.log(err));
};

// getSongsPinkFloyd();

const createCardAlbumPink = (dataAlbum) => {
  let albumContainer = document.getElementById("pinkFloydList");
  let jsonAlbumsArray = dataAlbum.data;

  for (let i = 0; i < jsonAlbumsArray.length; i++) {
    const singleAlbum = jsonAlbumsArray[i];
    // ul.innerHTML += `<li><img src="${singleAlbum.album.cover_big}">  <span>Title: ${singleAlbum.album.title}</span>`;

    albumContainer.innerHTML += `
        <div class="col col-sm-6 col-md-4 col-lg-2 px-1 mb-2">
            <div class="card">
                <img src="${singleAlbum.album.cover_big}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${singleAlbum.album.title}</h5>
                </div>
            </div>
     `;
  }
};

//get Dft Punk API
const getSongsDaftPunk = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=daftpunk", {
    method: "GET",
    // headers: {
    //   "X-RapidAPI-Key": "a1fdf9e2acmsh540c02662ac45b2p120069jsnb74ea4c691f0",
    //   "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    // },
  })
    .then((rawAlbums) => {
      return rawAlbums.json();
    })
    .then((dataAlbum) => {
      console.log("daft punk ", dataAlbum), createCardAlbumDaft(dataAlbum);
    })
    .catch((err) => console.log(err));
};

const createCardAlbumDaft = (dataAlbum) => {
  let albumContainer = document.getElementById("daftPunkList");
  let jsonAlbumsArray = dataAlbum.data;

  for (let i = 0; i < jsonAlbumsArray.length; i++) {
    const singleAlbum = jsonAlbumsArray[i];
    // ul.innerHTML += `<li><img src="${singleAlbum.album.cover_big}">  <span>Title: ${singleAlbum.album.title}</span>`;

    albumContainer.innerHTML += `
          <div class="col col-sm-6 col-md-4 col-lg-2 px-1 mb-2">
              <div class="card">
                  <img src="${singleAlbum.album.cover_big}" class="card-img-top">
                  <div class="card-body">
                      <h5 class="card-title">${singleAlbum.album.title}</h5>
                  </div>
              </div>
       `;
  }
};

//get Dft Punk API
const getSongsMetallica = () => {
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica",
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
      console.log("daft punk ", dataAlbum), createCardAlbumMeta(dataAlbum);
    })
    .catch((err) => console.log(err));
};

const createCardAlbumMeta = (dataAlbum) => {
  let albumContainer = document.getElementById("metallicaList");
  let jsonAlbumsArray = dataAlbum.data;

  for (let i = 0; i < jsonAlbumsArray.length; i++) {
    const singleAlbum = jsonAlbumsArray[i];
    // ul.innerHTML += `<li><img src="${singleAlbum.album.cover_big}">  <span>Title: ${singleAlbum.album.title}</span>`;

    albumContainer.innerHTML += `
            <div class="col col-sm-6 col-md-4 col-lg-2 px-1 mb-2">
                <div class="card">
                    <img src="${singleAlbum.album.cover_big}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${singleAlbum.album.title}</h5>
                    </div>
                </div>
         `;
  }
};

//get song list
const getSongList = () => {
  let songListArea = document.querySelector("#songListModal ol");
  let songListTitle = document.querySelectorAll(".card-title");
  songListArea.innerHTML = "";
  for (let i = 0; i < songListTitle.length; i++) {
    songListArea.innerHTML += `

    <li>${songListTitle[i].innerHTML}</li>

    `;
  }
};

const getUniqueNumber = () => {
  let uniqueNode = document.querySelectorAll(".card");
  let uniqueAlbumList = [];
  for (let i = 0; i < uniqueNode.length; i++) {
    if (!uniqueAlbumList.includes(uniqueNode[i].id)) {
      uniqueAlbumList.push(uniqueNode[i].id);
    }
  }
  console.log(uniqueAlbumList.length);
};

window.onload = () => {
  getSongsPinkFloyd();
  getSongsDaftPunk();
  getSongsMetallica();
};
