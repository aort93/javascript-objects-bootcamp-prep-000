var playlist = {linkinPark:"Numb", AvengedSevenfold:"Doomsday"};

<<<<<<< HEAD
//function callBack (playlist){
  //return playlist;
//}

function updatePlaylist(playlist, artistName, songTitle) {
  //return Object.assign({}, playlist, { [artistName]: songTitle })
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
=======
function callBack (playlist){
  return playlist;
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
  //playlist[artistName] = songTitle;
  //return playlist;
}

function removeFromPlaylist(playlist, artistName){
  //delete playlist.artistName;
>>>>>>> 03005688196b2b57db877c60328d996292c99329
  return playlist;

}

var artistName = "hi";
var songTitle = 'doom';

<<<<<<< HEAD
//console.log(callBack(playlist));
=======
console.log(callBack(playlist));
>>>>>>> 03005688196b2b57db877c60328d996292c99329
console.log(updatePlaylist(playlist, artistName, songTitle));
console.log(removeFromPlaylist(playlist,artistName));
