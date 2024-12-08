//toggle menu button
function toggleMenu(){
    const menu = document.querySelector('.menu')
    const nav = document.querySelector('.nav')
    menu.classList.toggle('active')
    nav.classList.toggle('active')

}

//Change the background video when click on the gallery images
function changeVideo(name){
       const bgVideoList = document.querySelectorAll('.bg-video');
       const trailers = document.querySelectorAll('.trailer');
       const models = document.querySelectorAll('.model');


//javascript higher order array function forEach
//This is easier to do data mapping
bgVideoList.forEach(video => {
    video.classList.remove('active');
    if(video.classList.contains(name)){
        video.classList.add('active');
    }
});
models.forEach(model => {
    model.classList.remove('active');
    if(model.classList.contains(name)){
        model.classList.add('active');
    }
});

//mapping trailer video change
trailers.forEach(video => {
    video.classList.remove('active');
    if(video.classList.contains(name)){
        video.classList.add('active');
    }
});

}

//Change the play and pause button on click event
function togglePlay() {
    const play = document.querySelector('.play')
    const pause = document.querySelector('.pause')
    play.classList.toggle('active')
    pause.classList.toggle('active')
}

/* Video Play and Pause */
function pauseVideo(){
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.pause();
    });
    togglePlay();
}

function playVideo(){
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.play();
    });
    togglePlay();
}

