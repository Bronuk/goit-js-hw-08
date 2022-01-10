import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(function () {
    player.getCurrentTime().then(function (seconds) {
        console.log(seconds);
        localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
    });
}, 1000)
);
const playContinue = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;
console.log(playContinue);
player.setCurrentTime(playContinue)


// ==========================ALT======================


// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// console.log(player.getVideoTitle());

// function getTimeToStart() {
//     player.getCurrentTime().then(function (seconds) {
//         localStorage.setItem('videoplayer-current-time', seconds)
//         console.log(seconds);
//     }).catch(function (err) {
//         console.log('could not get time value');
//     })
// }

// player.on('timeupdate', lodash.throttle(getTimeToStart, 1000));


//     window.addEventListener('load', (event) => {
//         const timeValue = localStorage.getItem('videoplayer-current-time');
//         if (timeValue !== "") {
//             player.setCurrentTime(timeValue).then(function (seconds) {
//                 console.log(seconds + ' seconds was the time specified');
//             }).catch(function (error) {
//                 console.log('could not set time or its value was empty');
//             })
//         }
//     });