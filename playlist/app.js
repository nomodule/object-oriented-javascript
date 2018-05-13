function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song){
  this.songs.push(song);
};

Playlist.prototype.play = function(){
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play();
};

Playlist.prototype.stop = function(){
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function(){
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play();
};

Playlist.prototype.renderInElement = function(list){
  list.innerHTML = "";
  for(var i = 0; i < this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();
  }
};

function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false
}

Song.prototype.play = function(){
  this.isPlaying = true;
};

Song.prototype.stop = function(){
  this.isPlaying = false;
};

Song.prototype.toHTML = function(){
  var htmlString = "";
  htmlString += '<li';
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += ' <span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';

  return htmlString;
};

var playlist = new Playlist();

var plalistElement = document.getElementById('playlist');

var janamJanam = new Song('Janam Janam', 'Arijit Singh', '3:43');
var premRatanDhanPayo = new Song('Prem Ratan Dhan Payo', 'Palak Mucchal', '4:27');

playlist.add(janamJanam);
playlist.add(premRatanDhanPayo);

playlist.renderInElement(plalistElement);

var playBtn = document.getElementById('play');
playBtn.onclick = function() {
  playlist.play();
  playlist.renderInElement(plalistElement);
}
var nextBtn = document.getElementById('next');
nextBtn.onclick = function() {
  playlist.next();
  playlist.renderInElement(plalistElement);
}
var stopBtn = document.getElementById('stop');
stopBtn.onclick = function() {
  playlist.stop();
  playlist.renderInElement(plalistElement);
}