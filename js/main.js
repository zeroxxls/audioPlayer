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
    currentTimeEl = document.querySelector('.js-current-time'),
    songDurationEl = document.querySelector('.js-song-duration');
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

    audio.addEventListener('timeupdate',(e)=>{
        const currentTime = e.target.currentTime;
        // console.log('currentTime:',currentTime)

        const duration = e.target.duration
        // console.log('duration:',duration)

        let progressWidth = (currentTime/duration)*100;
        progressBar.style.width = `${progressWidth}%`

        let currentMinutes = Math.floor(currentTime/60);
        let currentSeconds = Math.floor(currentTime%60);

        if(currentSeconds<10){
            currentSeconds =`0${currentSeconds}`
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`
    });

    audio.addEventListener('loadeddata',()=>{
        let audioDuration = audio.duration;
        let Minutes = Math.floor(audioDuration/60);
        let Seconds = Math.floor(audioDuration%60);

        songDurationEl.textContent = `${Minutes}:${Seconds.toString().padStart(2,'0')}`
    });
    progressArea.addEventListener('click',(e)=> {
        let progressWidth = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = audio.duration;
        audio.currentTime = (clickedOffsetX/progressWidth)* songDuration;
    });
    audio.addEventListener('ended',nextSong)
})