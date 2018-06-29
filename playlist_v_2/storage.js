class Storage {
    constructor() {}

    getSongs() {
        let songs;

        // songs item not found in local storage
        if (localStorage.getItem('songs') === null) {

            // make is blank array
            songs = [];
        } else {

            // found songs array in local storage
            songs = JSON.parse(localStorage.getItem('songs'));
        }

        return songs;
    }

    storeSong(song) {
        // get songs from local storage
        const songs = this.getSongs();

        // add new song in songs array
        songs.push(song);

        // again store updates songs array in local storage
        localStorage.setItem('songs', JSON.stringify(songs));
    }

    deleteSong(songIndex) {
        // get songs from local storage
        const songs = this.getSongs();

        // delete song with the help of given song index
        songs.splice((songIndex - 1), 1);

        // again store updates songs array in local storage
        localStorage.setItem('songs', JSON.stringify(songs));
    }
}