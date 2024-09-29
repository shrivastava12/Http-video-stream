window.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('videoPlayer');
    videoElement.src = '/video'; // This will trigger the video stream from the server
});