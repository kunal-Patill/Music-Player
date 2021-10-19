        const music =document.querySelector("audio");
        const img = document.querySelector("img");
        const play = document.getElementById("play");
        const artist = document.getElementById("artist");
        const title = document.getElementById("title");
        const next = document.getElementById("next");
        const prev = document.getElementById("prev");

        const songs = [
            {
            name: "kunal-1.mp3",
            title:"Ranjha",
            artist:"B Praak & Jasleen Royal",   
            },
            {
            name: "kunal-2.mp3",
            title:"Pee Loon",
            artist:"Mohit Chauhan",   
            },
            {
            name: "kunal-3.mp3",
            title:"Mera Bina",
            artist:"Nikhil D'Souza", 
            },
            {
            name: "kunal-4.mp3",
            title:"Tum Jo Aaye",     
            artist:"Rahat Fateh Ali Khan",    
            },
            {
            name: "kunal-5.mp3",
            title:"Mann Bharryaa",   
            artist:"B Praak & Harish Verma",  
            },
        ];

        let isPlaying = false;
        // for play functionality 
        // play.addEventListener("click" , () =>{
            const playMusic = () =>{
            isPlaying = true;
            music.play();
            play.classList.replace("fa-play" ,"fa-pause")
            img.classList.add("anime");
        };

        // for pause functionality
        // play.addEventListener("click" , () =>{
            const pauseMusic = () =>{
            isPlaying = false;
            music.pause();
            play.classList.replace("fa-pause", "fa-play")
            img.classList.remove("anime");
        };

        play.addEventListener("click", () => {
            if(isPlaying){
                pauseMusic();
            }else{
                playMusic();
            }
        })

        // changing the music data
        
        const loadSong = (songs) => {
            title.textContent = songs.title;
            artist.textContent = songs.artist;
            music.src = "music/" + songs.name + "mp3";
            img.src = "images/" + songs.name + ".jpg";
        };

        songIndex = 0;
        // loadSong(songs[3]);

        const nextSong = () =>{
            songIndex = (songIndex + 1) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        }
        const prevSong = () =>{
            songIndex = (songIndex - 1 + songs.length) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        }

        next.addEventListener("click", nextSong);
        prev.addEventListener("click", prevSong);
    