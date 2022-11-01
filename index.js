const albums = [
  {
    artist: "taylor swift",
    album: "folklore",
    rating: [110, 100],
  },
  {
    artist: "taylor swift",
    album: "midnights",
    rating: [75, 100],
  },
  {
    artist: "taylor swift",
    album: "evermore",
    rating: [60, 100],
  },
  {
    artist: "taylor swift",
    album: "reputation",
    rating: [70, 100],
  },
  {
    artist: "taylor swift",
    album: "1989",
    rating: [60, 100],
  },
  {
    artist: "taylor swift",
    album: "speak now",
    rating: [70, 100],
  },
  {
    artist: "ariana grande",
    album: "thank u, next",
    rating: [90, 100],
  },
  {
    artist: "ariana grande",
    album: "sweetner",
    rating: [80, 100],
  },
  {
    artist: "ariana grande",
    album: "dangerous woman",
    rating: [70, 100],
  },
];

function albumsFilter(){
    const filterAlbums = albums.filter(object =>{
    return object.rating >= 
});
}
albums.forEach((albums) => {
  console.log(albums.album);
  albums.rating.forEach((number) => {
    console.log(number);
  });
});

console.log(albums);
const result = albums.filter(albums);
console.log(result);
