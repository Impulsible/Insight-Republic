// script.js

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Toggle dark mode
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkModeToggle.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";
  });

  // Newsletter subscription form
  const form = document.querySelector(".subscribe-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input").value;
    if (email.trim() !== "") {
      alert(`Thank you for subscribing with: ${email}`);
      form.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // Smooth scroll for nav links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Modal functionality
  const modal = document.getElementById("announcementModal");
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");

  if (modal && openModal && closeModal) {
    openModal.addEventListener("click", () => modal.style.display = "block");
    closeModal.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => {
      if (e.target == modal) modal.style.display = "none";
    });
  }

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Resize feature image
  const featureImg = document.querySelector(".feature img");
  if (featureImg) {
    featureImg.style.maxWidth = "auto";
    featureImg.style.height = "500px";
    featureImg.style.alignSelf = "left";
  }
});
const nav = document.querySelector(".main-header nav ul");
if (nav) {
  nav.style.marginLeft = "auto"; // ❌ Remove this
}
// Add more news to the sidebar
const sidebarNews = document.querySelector(".sidebar ul");
if (sidebarNews) {
  const newItems = [
    {
      title: "AI in Education",
      text: "How artificial intelligence is changing classrooms around the globe."
    },
    {
      title: "The Future of Remote Work",
      text: "Are hybrid roles here to stay or just a passing phase?"
    },
    {
      title: "Cybersecurity in 2025",
      text: "Trends and predictions for the future of online safety."
    }
  ];

  newItems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.title}</strong><br><small>${item.text}</small>`;
    sidebarNews.appendChild(li);
  });
}

// Set background color scheme from root variables
const rootStyles = getComputedStyle(document.documentElement);
const mainBackground = rootStyles.getPropertyValue("--background-color");
if (mainBackground) {
  document.body.style.backgroundColor = mainBackground.trim();
}
 // Add support for theme switching using CSS variables
 const updateTheme = () => {
  if (body.classList.contains("dark-mode")) {
    document.documentElement.style.setProperty("--background-color", "#121212");
    document.documentElement.style.setProperty("--text-color", "#e0e0e0");
  } else {
    document.documentElement.style.setProperty("--background-color", "#ffffff");
    document.documentElement.style.setProperty("--text-color", "#000000");
  }
};

updateTheme();

// Watch for dark mode class changes to update theme
const observer = new MutationObserver(updateTheme);
observer.observe(body, { attributes: true, attributeFilter: ["class"] });

// Web3 theme toggle
const web3ModeToggle = document.getElementById("web3ModeToggle");
if (web3ModeToggle) {
  web3ModeToggle.addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "#0d0d0d");
    document.documentElement.style.setProperty("--text-color", "#f5f5f5");
    document.documentElement.style.setProperty("--accent-color", "#00ffe7");
    document.documentElement.style.setProperty("--secondary-color", "#ff00cc");
    document.body.style.background = "#0d0d0d";
  });
}
// Update the year in the footer dynamically
document.getElementById('year').textContent = new Date().getFullYear();

  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.article-card');

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      card.style.display = (title.includes(query) || description.includes(query)) ? 'block' : 'none';
    });
  });
// script.js

// Set current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Dark mode toggle (safe check)
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
