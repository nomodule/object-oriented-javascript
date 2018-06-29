
class UI {
    constructor() {
        this.isPlaying = false;
    }

    // Rende song in DOM
    renderSongs() {
        // variable for holding HTML for every song
        let songsHTML = '';

        // get songs from local storage
        const songs = storage.getSongs();

        // make HTML for every song
        songs.forEach((song, index) => {

            // Create HTML for song
            songsHTML += `
            <tr>
                <td class="js-song-index">${index + 1}</td>
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>${song.duration}</td>
                <td><a href="#" class="remove"><i class="fa fa-close"></i></a></td>
            </tr>
        `;
        });
        
        // Add song HTML in list
        document.getElementById('playlist').innerHTML = songsHTML;
    }

    showMessage(message, type) {
        const messageElm = document.createElement('div');
        messageElm.className = `alert alert-${type}`;
        messageElm.textContent = message;

        document.body.insertBefore(messageElm, document.querySelector('.container'));

        setTimeout(this.removeMessage, 3000);
    }

    removeMessage() {
        document.querySelector('.alert').remove();
    }
}