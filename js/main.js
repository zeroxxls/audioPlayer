const img = document.querySelector('.js-img'),
    musicName = document.querySelector('.js-music-name'),
    artistName = document.querySelector('.js-artist-name'),
    btnPrev = document.querySelector('.js-btn-prev'),
    btnPlay = document.querySelector('.js-btn-play'),
    btnPause = document.querySelector('.js-btn-pause'),
    btnNext = document.querySelector('.js-btn-next'),
    progressArea = document.querySelector('.js-progress-area'),
    progressBar = document.querySelector('.js-progress-bar'),
    audio = document.querySelector('.js-audio'),
    currentTimeE1 = document.querySelector('.js-current-time'),
    songDurationE1 = document.querySelector('.js-song-duration');
let playlist = [
    {
        name: 'In the End',
        artist: 'Linkin Park',
        img
    }
]    