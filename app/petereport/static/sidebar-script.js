document.addEventListener('DOMContentLoaded', () => {
  const configToggle = document.getElementById('configToggle');
  const configMenu = document.getElementById('configMenu');
  const configIcon = document.getElementById('configIcon');
  if (configToggle) {
    configToggle.addEventListener('click', () => {
      // Toggle visibility of the submenu with smooth transition
      configMenu.classList.toggle('max-h-0');  // Start with 0 height
      configMenu.classList.toggle('opacity-0'); // Start with 0 opacity
      configMenu.classList.toggle('max-h-96'); // Set a maximum height when visible
      configMenu.classList.toggle('opacity-100'); // Full opacity when visible
      configIcon.classList.toggle('-rotate-90');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const customerToggle = document.getElementById('customerToggle');
  const customerMenu = document.getElementById('customerMenu');
  const customerIcon = document.getElementById('customerIcon');

  // Add event listener for toggling
  if (customerToggle) {
    customerToggle.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the link from navigating

      // Toggle visibility of the submenu with smooth transition
      customerMenu.classList.toggle('max-h-0');  // Start with 0 height
      customerMenu.classList.toggle('opacity-0'); // Start with 0 opacity
      customerMenu.classList.toggle('max-h-96'); // Set a maximum height when visible
      customerMenu.classList.toggle('opacity-100'); // Full opacity when visible

      // Toggle rotation for the arrow icon
      customerIcon.classList.toggle('-rotate-90');
    });
  }
});

// Select elements for Products section
document.addEventListener('DOMContentLoaded', () => {
  const productToggle = document.getElementById('productToggle');
  const productMenu = document.getElementById('productMenu');
  const productIcon = document.getElementById('productIcon');

  // Add event listener for toggling
  if (productToggle) {
    productToggle.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the link from navigating

      // Toggle visibility of the submenu with smooth transition
      productMenu.classList.toggle('max-h-0');  // Start with 0 height
      productMenu.classList.toggle('opacity-0'); // Start with 0 opacity
      productMenu.classList.toggle('max-h-96'); // Set a maximum height when visible
      productMenu.classList.toggle('opacity-100'); // Full opacity when visible

      // Toggle rotation for the arrow icon
      productIcon.classList.toggle('-rotate-90');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const reportToggle = document.getElementById('reportToggle');
  const reportMenu = document.getElementById('reportMenu');
  const reportIcon = document.getElementById('reportIcon');

  // Add event listener for toggling
  if (reportToggle) {
    reportToggle.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the link from navigating

      // Toggle visibility of the submenu with smooth transition
      reportMenu.classList.toggle('max-h-0');  // Start with 0 height
      reportMenu.classList.toggle('opacity-0'); // Start with 0 opacity
      reportMenu.classList.toggle('max-h-96'); // Set a maximum height when visible
      reportMenu.classList.toggle('opacity-100'); // Full opacity when visible

      // Toggle rotation for the arrow icon
      reportIcon.classList.toggle('-rotate-90');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const findingsToggle = document.getElementById('findingsToggle');
  const findingsMenu = document.getElementById('findingsMenu');
  const findingsIcon = document.getElementById('findingsIcon');

  // Add event listener for toggling
  if (findingsToggle) {
    findingsToggle.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the link from navigating

      // Toggle visibility of the submenu with smooth transition
      findingsMenu.classList.toggle('max-h-0');  // Start with 0 height
      findingsMenu.classList.toggle('opacity-0'); // Start with 0 opacity
      findingsMenu.classList.toggle('max-h-96'); // Set a maximum height when visible
      findingsMenu.classList.toggle('opacity-100'); // Full opacity when visible

      // Toggle rotation for the arrow icon
      findingsIcon.classList.toggle('-rotate-90');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const cweToggle = document.getElementById('cweToggle');
  const cweMenu = document.getElementById('cweMenu');
  const cweIcon = document.getElementById('cweIcon');

  // Add event listener for toggling
  if (cweToggle) {
    cweToggle.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the link from navigating

      // Toggle visibility of the submenu with smooth transition
      cweMenu.classList.toggle('max-h-0');  // Start with 0 height
      cweMenu.classList.toggle('opacity-0'); // Start with 0 opacity
      cweMenu.classList.toggle('max-h-96'); // Set a maximum height when visible
      cweMenu.classList.toggle('opacity-100'); // Full opacity when visible

      // Toggle rotation for the arrow icon
      cweIcon.classList.toggle('-rotate-90');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const owaspToggle = document.getElementById('owaspToggle');
  const owaspMenu = document.getElementById('owaspMenu');
  const owaspIcon = document.getElementById('owaspIcon');

  // Add event listener for toggling
  if (owaspToggle) {
    owaspToggle.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the link from navigating

      // Toggle visibility of the submenu with smooth transition
      owaspMenu.classList.toggle('max-h-0');  // Start with 0 height
      owaspMenu.classList.toggle('opacity-0'); // Start with 0 opacity
      owaspMenu.classList.toggle('max-h-96'); // Set a maximum height when visible
      owaspMenu.classList.toggle('opacity-100'); // Full opacity when visible

      // Toggle rotation for the arrow icon
      owaspIcon.classList.toggle('-rotate-90');
    });
  }
});







  