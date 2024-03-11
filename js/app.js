// Smooth scrolling
window.addEventListener('scroll', function () {
  let elementsToShow = document.querySelectorAll('.fade-in');
  for (let element of elementsToShow) {
    if (isElementPartiallyInViewport(element)) {
      element.classList.add('active');
    }
  }
});

function isElementPartiallyInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (
    rect.top <= windowHeight &&
    rect.bottom >= 0
  );
}

// Sticky Header
window.onscroll = function () {
  stickyHeader();
  updateReadingProgress(); // Call updateReadingProgress function
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Smooth scroll to top arrow
document.getElementById("arrow").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 100;
    const elementPosition = target.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});

// Progress bar function
function updateReadingProgress() {
  const headerHeight = document.querySelector('.header').offsetHeight;
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.scrollHeight;

  // Calculate the scroll progress
  const scrollProgress = (scrollTop / (bodyHeight - windowHeight)) * 100;

  // Update the width of the progress bar
  document.getElementById("reading-progress").style.width = scrollProgress + "%";
}
