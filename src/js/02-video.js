import vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeo(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

//throttled
const onTimeupdate = function (data) {
  localStorage.setItem('videoplayer-current-time[s]-throttled', data.seconds);
};
player.on('timeupdate', throttle(onTimeupdate, 1000));

//not throttled for comparison
player.on('timeupdate', function (data) {
  localStorage.setItem('videoplayer-current-time[s]', data.seconds);
});

const currentTime = localStorage.getItem(
  'videoplayer-current-time[s]-throttled'
);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

/*Z DOKUMENTACJI

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);


const onTimeupdate = function (data) {};
player.on('timeupdate', onTimeupdate);*/
