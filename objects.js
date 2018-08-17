var playlist = { 
  kanye: "Jesus Walks", 
  journey: "Don't Stop Believing"
}

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign (playlist { [artistName]: songTitle } )
}
