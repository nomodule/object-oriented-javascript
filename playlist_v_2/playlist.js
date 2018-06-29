class Playlist {
    constructor() {
        // Will contain all of the songs
        this.songs = [];

        // Will contain currently playing song default 0 indexed will play
        this.currentPlayingSong = 0;
    }


    // Add song in playlist
    addSong(song) {
        this.songs.push(song);
    }
}