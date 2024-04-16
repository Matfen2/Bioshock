const games = [
  {
    pict: "/assets/picts/bioshock1Remastered.jpg",
    wallpaper: "/assets/picts/bioshock1RemasteredWallpaper.jpg"
  },
  {
    pict: "/assets/picts/bioshock2Remastered.jpg",
    wallpaper: "/assets/picts/bioshock1RemasteredWallpaper.jpg"
  },
  {
    pict: "/assets/picts/bioshockInfinite.jpg",
    wallpaper: "/assets/picts/bioshockInfiniteWallpaper.jpg"
  },
]

const body = document.getElementById('container');
const show = document.getElementById('btnShow');
const logo = document.getElementById('logo');

show.addEventListener('click', function () {
  games.forEach(game => {
    const present = document.querySelector('.listGames');
    const img = document.createElement('img');
    img.src = game.pict;
    img.classList.add('img-fluid');
    present.appendChild(img);

    img.addEventListener('mouseenter', function () {
      logo.style.visibility = "hidden";
      body.style.backgroundImage = `url('${game.wallpaper}')`
    })

  })
  show.style.display = "none";
})