navigator.mediaDevices.getUserMedia({ video: true, audio: true })
.then(function (stream) {
  var videoElement = document.getElementById('videoElement');
  videoElement.srcObject = stream;
})
.catch(function (err) {
  console.log('Error: ' + err.message);
});
