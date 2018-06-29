// init UI
const ui = new UI();

// init Playlist
const playlist = new Playlist();

// init storage
const storage = new Storage();


// Add song function
const addSong = (e) => {
    const title = document.getElementById('songTitle').value;
    const artist = document.getElementById('songArtist').value;
    const duration = document.getElementById('songDuration').value;

    if (title !== '' && artist !== '' && duration !== '') {
        // init song
        const song = new Song(title, artist, duration);

        // Add song in playlist
        playlist.addSong(song);

        // Add song in local storage
        storage.storeSong(song);

        // render song in DOM
        ui.renderSongs(song);
    } else {
        ui.showMessage('One ore more fields are empty', 'danger');
    }

    // prevent from submiting form
    e.preventDefault();
}

// Onload render songs function
const onloadRenderSongs = () => {
    ui.renderSongs();
}

// Delete song function
const deleteSong = (e) => {
    // if clicked element contains `remove` class
    if (e.target.parentElement.className === 'remove') {

        // get the index number of that song
        const songIndex = (e.target.parentElement.parentElement.parentElement).querySelector('.js-song-index').textContent;

        // remove that song from localstorage
        storage.deleteSong(songIndex);

        // after deleting songs render dom again
        ui.renderSongs();
    }
}

// Add song event listener
document.getElementById('songForm').addEventListener('submit', addSong);

// Onload render all of the stored songs event listener
document.addEventListener('DOMContentLoaded', onloadRenderSongs);

// Delete song event listener
document.getElementById('playlist').addEventListener('click', deleteSong);