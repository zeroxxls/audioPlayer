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
        img: '../img/img1.jpg',
        src: '../audio/song1.mp3'
    },
    {
        name: 'Down With the Sickness',
        artist: 'Disturbed',
        img: '../img/img2.jpg',
        src: '../audio/song2.mp3'
    },
    {
        name:'Chill Music for Studying ',
        artist: 'Lofi Girl',
        img: '../img/img3.jpg',
        src: '../audio/song3.mp3'
    }
];
let songIndex = Math.floor((Math.random() * playlist.length)+ 1);

const loadSong = (index)=>{
    musicName.textContent=playlist[index-1].name;
    artistName.textContent=playlist[index-1].artist;
    img.src=`${playlist[index-1].src}`;
    audio.src=`${playlist[index-1].src}`;
};

const playSong = ()=>{
    audio.play();
    btnPlay.classList.add('hidden');
    btnPause.classList.remove('hidden');
};

const pauseSong = ()=>{
    audio.pause();
    btnPlay.classList.remove('hidden');
    btnPause.classList.add('hidden');
};

const prevSong=()=>{
    songIndex--;
    if(songIndex<1){
        songIndex = playlist.length
    }
    // console.log(songIndex);

    loadSong(songIndex);
    playSong();
}

const nextSong=()=>{
    songIndex++;
    if(songIndex>playlist.length){
        songIndex = 1;
    }
    loadSong(songIndex);
    playSong();
}


window.addEventListener('load', ()=>{
    loadSong(songIndex);
    btnPlay.addEventListener('click',playSong);
    btnPause.addEventListener('click',pauseSong);
    btnPrev.addEventListener('click',prevSong);
    btnNext.addEventListener('click',nextSong);
})