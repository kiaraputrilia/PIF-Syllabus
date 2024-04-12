document.addEventListener('DOMContentLoaded', function() {
    const mediaItems = document.querySelectorAll('#gallery .media-wrapper');
    let currentIndex = 0;
  
    function showMedia(index) {
      // Hide all media items
      mediaItems.forEach(item => {
        item.classList.remove('active');
      });
  
      // Show the media item at the given index
      mediaItems[index].classList.add('active');
    }
  
    function nextMedia() {
      currentIndex = (currentIndex + 1) % mediaItems.length;
      showMedia(currentIndex);
    }
  
    // Show the first media item initially
    showMedia(currentIndex);
  
    // Listen for clicks on the gallery to go to the next item
    document.getElementById('gallery').addEventListener('click', nextMedia);
  });
  