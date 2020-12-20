window.onload = () => {
    let song_img_el = document.getElementById('song-image');
    let song_title_el = document.getElementById('song-title');
    let song_artist_el = document.getElementById('song-artist');
    let song_next_up_el = document.getElementById('song-next-up');

    let play_btn = document.getElementById('play-btn');
    let play_btn_icon = document.getElementById('play-icon');
    let prev_btn = document.getElementById('prev-btn');
    let next_btn = document.getElementById('next-btn');

    let audio_player = document.getElementById('music-player');

    let current_song_index;
    let next_song_index;

    let songs = [
        {
            title:'We Wish you a Merry Christmas',
            artist:'Hensenchat',
            song_path: 'music/wishyouamerrychristmas.mp3',
            img_path: 'imgs/wewishyouamerrychristmas.jpg'
        },
        {
            title: 'Frosty the Snowman',
            artist: 'Anthony Viscounte & The Merry Gentlemen',
            song_path: 'music/frosty.mp3',
            img_path: 'imgs/frostythesnowman.jpg'
        },
        {
            title: 'Last Christmas',
            artist: 'Monaco Lorenzo',
            song_path: 'music/lastchristmas.mp3',
            img_path: 'imgs/lastchristmas.jpg'
        },
        {
            title: 'Jingle Bells',
            artist: 'CorporateMusic',
            song_path: 'music/jinglebells.mp3',
            img_path: 'imgs/jinglebells.jpg'
        },
        {
            title: 'Joy to the World',
            artist: 'CorporateMusic',
            song_path: 'music/joytotheworld.mp3',
            img_path: 'imgs/joytotheworld.jpg'
        },
        {
            title: 'Santa Claus is Coming to Town',
            artist: 'BKSonic',
            song_path: 'music/santa.mp3',
            img_path: 'imgs/santa.jpg'
        }
    ]

    play_btn.addEventListener('click', TogglePlaySong);
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

    function InitPlayer() {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }

    function UpdatePlayer() {
        let song = songs[current_song_index];

        song_img_el.style = "background-image: url('" + song.img_path + "')";
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;

        song_next_up_el.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;

        audio_player.src = song.song_path;
    }

    function TogglePlaySong () {
        if (audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');
        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');
        }
    }

    function ChangeSong (next = true) {
        if (next) {
            current_song_index++;
            next_song_index = current_song_index + 1;
            
            if (current_song_index > songs.length - 1) {
            current_song_index = 0;
            next_song_index = current_song_index + 1;
            }

            if (next_song_index > songs.length - 1) {
                next_song_index = 0;
            }
        } else {
             current_song_index--;
            next_song_index = current_song_index + 5;

            if (current_song_index < 0) {
            current_song_index = songs.length - 5;
            next_song_index = 0;
            }
        }
        UpdatePlayer();
        TogglePlaySong();
    }
}     

