  // Array of text to cycle through in the title
  const titles = ["Syllabus", "A Growing Syllabus", "An Imperfect Syllabus", "An Ever-Expanding Syllabus", "A syllabus that's...", "Perpetually, In Fermentation"];
  let index = 0;

  // Function to update the title
  function updateTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length; // Move to the next title, looping back to the start
  }

  // Update the title every 2 seconds
  setInterval(updateTitle, 2000);

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
  