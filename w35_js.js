// Get the video section and video container elements
const videoSection = document.getElementById('video-section');
const videoContainer = document.getElementById('video-container');

// Set the YouTube video URL and parameters
const videoUrl = 'https://www.youtube.com/embed/sDt-DNuFzcs?autoplay=1&controls=0&loop=1&mute=1';

// Set the video container as the background
videoContainer.innerHTML = `<iframe width="100%" height="100%" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;

// Adjust the height of the video section based on the video's aspect ratio
function resizeVideoSection() {
  const aspectRatio = 9 / 16; // 16:9 aspect ratio (width divided by height)
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = width * aspectRatio;
  videoSection.style.height = height + 'px';
}

// Resize the video section when the window is resized
window.addEventListener('resize', resizeVideoSection);

// Initial resize of the video section
resizeVideoSection();
