  const titles = ["Syllabus", "A Growing Syllabus", "An Imperfect Syllabus", "An Ever-Expanding Syllabus", "A syllabus that's...", "Perpetually, In Fermentation"];
  let index = 0;

  function updateTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length; 
  }

  setInterval(updateTitle, 2000);

document.addEventListener('DOMContentLoaded', function() {
    const mediaItems = document.querySelectorAll('#gallery .media-wrapper');
    let currentIndex = 0;
  
    function showMedia(index) {
      mediaItems.forEach(item => {
        item.classList.remove('active');
      });
  
      mediaItems[index].classList.add('active');
    }
  
    function nextMedia() {
      currentIndex = (currentIndex + 1) % mediaItems.length;
      showMedia(currentIndex);
    }
  
    showMedia(currentIndex);
    document.getElementById('gallery').addEventListener('click', nextMedia);
  });
  