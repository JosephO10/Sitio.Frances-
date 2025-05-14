// Configuración del video
const VIDEO_URL = "https://www.youtube.com/embed/your-video-id";
function initializeVideo() {
    const videoContainer = document.getElementById('video-player');
    const iframe = document.createElement('iframe');
    iframe.src = VIDEO_URL;
    iframe.width = "800";
    iframe.height = "450";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);
}

document.addEventListener('DOMContentLoaded', initializeVideo);