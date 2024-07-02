// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
   "https://weblot.gr/css/style.css",
   "https://weblot.gr/css/mobile.css",
   "https://weblot.gr/css/desktop.css",
   "https://weblot.gr/css/social.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
];

// Αρχικοποίηση head
const head = document.head;

// Προσθήκη των αρχείων CSS στο head
cssLinks.forEach(linkUrl => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = linkUrl;

    // Προσθήκη στο head
    head.appendChild(linkElement);
});
