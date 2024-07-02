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

/////////////////
/// Εισαγωγή Logo
/////////////////


// Δημιουργία στοιχείου <link> για το favicon .ico
const icoFaviconLink = document.createElement('link');
icoFaviconLink.rel = 'shortcut icon';
icoFaviconLink.type = 'image/x-icon';
icoFaviconLink.href = 'https://www.weblot.gr/files/img/logo.ico';

// Προσθήκη του στοιχείου <link> στο <head> του εγγράφου
document.head.appendChild(icoFaviconLink);


///////////////////////////////
// Θέτουμε το title της σελίδας
///////////////////////////////
document.title = 'WebLot';

// Δημιουργία ενός νέου στοιχείου <meta>
const metaElement = document.createElement('meta');


///////////
// ViewPort
///////////

// Ορίζουμε την ιδιότητα 'name' ως 'viewport'
metaElement.setAttribute('name', 'viewport');

// Ορίζουμε την ιδιότητα 'content' με την τιμή που θέλουμε
// Σε αυτήν την περίπτωση, ορίζουμε initial-scale=0.8
metaElement.setAttribute('content', 'width=device-width, initial-scale=0.8');

// Προσθέτουμε το στοιχείο <meta> στο <head> του HTML εγγράφου
document.head.appendChild(metaElement);
