window.onload = function () {
    //Declaring the tracking for a 'face' object for the myVideo element. 
    var video = document.getElementById('myVideo');
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var tracker = new tracking.ObjectTracker('face');
    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);
    tracking.track('#myVideo', tracker, {
        camera: true
    });

    //Tracking function for the canvas element.
    tracker.on('track', function (event) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        event.data.forEach(function (rect) {
            context.strokeStyle = '#FF0000';
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = "#fff";
            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

            //If audio is already playing > pauses audio.  
            var myAudio = document.getElementById('myAudio');
            if (myAudio.duration > 0 && !myAudio.paused) {
                console.log('sound is already playing');
            } else {
                myAudio.play();
            }

        });
    });
};

function pauseVideo() {
    var vid = document.getElementById('myVideo')
    var sound = document.getElementById('myAudio')
    var cv = document.getElementById('myCanvas')
    vid.pause();
    sound.muted = true;
    cv.style.visibility = "hidden"
}

function playVideo() {
    var vid = document.getElementById('myVideo')
    var sound = document.getElementById('myAudio')
    var cv = document.getElementById('myCanvas')
    vid.play();
    sound.muted = false;
    cv.style.visibility = "visible"
}

