// Αντιστοίχιση του πεδίου αναζήτησης και των άρθρων
const searchInput = document.getElementById('searchInput');
const articles = document.querySelectorAll('.post');

// Λειτουργία φίλτρου για την αναζήτηση
searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase(); // Αφαίρεση κενών διαστημάτων και μετατροπή σε πεζά γράμματα
    
    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        
        // Έλεγχος αν ο τίτλος περιέχει τη φράση ως ακριβώς φράση
        if (query === '' || title.includes(query)) {
            article.style.display = 'block'; // Εμφάνιση άρθρου
        } else {
            article.style.display = 'none'; // Απόκρυψη άρθρου
        }
    });
});
