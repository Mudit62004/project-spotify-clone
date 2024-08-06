console.log(`Lets write JavaScript`);
let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getsongs(folder) {
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/${folder}/`)
    let resoponse = await a.text();
    console.log(resoponse)
    let div = document.createElement("div")
    div.innerHTML = resoponse;
    let as = div.getElementsByTagName("a")

     songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }

    }

    // Play the first song

    
    //show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img height="30px" class="invert" src="music.svg" alt="music logo">
                        <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Mudit</div>
                        </div>
                        <div class="playnow">
                            <span>Play Now</span>
                            <img height="20px" src="play.svg" alt="" class="invert">
                        </div>  </li>`;
    }

    //attach event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    })

    return songs
}

const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function displayAlbums(){
    let a = await fetch(`http://127.0.0.1:3000/songs/`)
    let resoponse = await a.text();
    console.log(resoponse)
    let div = document.createElement("div")
    div.innerHTML = resoponse;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
        for (let index = 0; index < array.length; index++) {
            const e = array[index];
            
        if(e.href.includes("/songs")){
            let folder = e.href.split("/").slice(-2)[0]

            // get the metedata of the folder
            let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)
            let resoponse = await a.json();
            console.log(resoponse)
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="${folder}" class="card">
                        <div  class="play">
                            <svg height = "40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve"><circle fill="#000" cx="256" cy="256" r="246"/><circle fill="#1ed760" cx="256" cy="256" r="205"/><path fill="#000" d="M176 389V123l220 133z"/></svg>      
                        </div>

                        <img src="/songs/${folder}/cover.png" alt="">
                        <h2>${resoponse.title}</h2>
                        <p>${resoponse.description}</p>
                    </div>`
        }
    } 

    //load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e =>{
        e.addEventListener("click", async item=>{
            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)
           playMusic(songs[0])
        })
     })
    console.log(anchors)
}

async function main() {
    // get the list of all songs
     await getsongs("songs/cs")
    playMusic(songs[0], true)

    //Display all the albums on the page
    displayAlbums()
    

    //attach an event listner to play , next and previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "play.svg"
        }
    })

    //Listen for timeupdate event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })

    // Add event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%"
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    //Add an event listener for hanburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    //add an event listener to close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    //add an event listener to previous and next
    previous.addEventListener("click", () => {
        currentSong.pause()
        console.log("Previous clicked")
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

    next.addEventListener("click", () => {
        currentSong.pause()
        console.log("Next clicked")

        let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })

    //add an event to volume 
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) =>{
        console.log("Setting volume to", e.target.value, "/ 100")
        currentSong.volume = parseInt(e.target.value)/100
    }) 

    //Add event listener to mute the track
    document.querySelector(".volume>img").addEventListener("click", e=>{
        if(e.target.src.includes("volume.svg")){
            e.target.src =  e.target.src.replace("volume.svg", "mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentSong.volume == 0.1;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }
    })

    

}

main() 