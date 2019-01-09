/*
$(document).ready(function () {
  
});

var objects = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
*/
/*
window.onload = function() {
  run()
};
    
function run() {

  // try to access users webcam and stream the images
  // to the video element
  const videoEl = document.getElementById('myVideo')
  navigator.getUserMedia(
    { video: {} },
    stream => videoEl.srcObject = stream,
    err => console.error(err)
  )
}
*/
window.onload = function () {
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
    tracker.on('track', function (event) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        event.data.forEach(function (rect) {
            context.strokeStyle = '#FF0000';
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = "#fff";
            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
        });
    });
};



