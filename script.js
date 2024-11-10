// JavaScript for any interactive elements
// Example: Placeholder for future functionality
console.log("Healtify website");

let slideIndex = 0;
  showSlides(slideIndex);

  function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    // Ensure only the active slide is displayed
    slides.forEach((slide, i) => {
      slide.style.display = i === n ? "block" : "none";
      dots[i].classList.toggle("active", i === n);
    });

    // Move to the next slide after setting current one
    slideIndex = (n + 1) % slides.length;
  }

  // Set an interval for automatic slideshow
  setInterval(() => showSlides(slideIndex), 5000);

  function currentSlide(n) {
    showSlides(n - 1);
    slideIndex = n - 1;
  }

  // Function to handle tab navigation
  function showTab(tabName) {
    // Get all tab contents and tab buttons
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-btn');

    // Hide all tab contents and remove active class from all buttons
    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show the selected tab content and add active class to the clicked button
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
  }