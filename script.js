function navigateToInput() {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.input-page').style.display = 'block';
}

function validateStreamURL() {
    const url = document.getElementById('streamURL').value;
    const drmFields = document.getElementById('drmFields');
    if (url.endsWith('.mpd')) {
        drmFields.style.display = 'block';
    } else {
        drmFields.style.display = 'none';
    }
}

function playStream() {
    const url = document.getElementById('streamURL').value;
    const keyID = document.getElementById('keyID').value;
    const key = document.getElementById('key').value;
    const playerContainer = document.getElementById('player');
    playerContainer.style.display = 'block';
    playerContainer.innerHTML = '';

    jwplayer("player").setup({
        file: url,
        width: "100%",
        aspectratio: "16:9",
        drm: url.endsWith('.mpd') ? { clearkey: { keyId: keyID, key: key } } : undefined
    });
}