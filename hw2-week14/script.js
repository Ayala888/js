let artists = [
    {name: "Michael Jackson", songs: ["Smooth Crinimal", "Billie Jean", "Beat It", "Earth Song"]},
    {name: "Billie Eilish", songs: ["Bad Guy", "Lovely", "Lunch", "Chihiro"]},
    {name: "Kairat Nurtas", songs: ["Auyrmaydy Zhurek", "Ol sen emes"]}
]

console.log(artists);


artists[2].songs[1] = "Baika"
console.log(artists);


alert(`${artists[0].name}:  ${artists[0].songs[3]}`)



let filtered = artists[1].songs.filter(song => song.length <=6)
console.log(filtered);