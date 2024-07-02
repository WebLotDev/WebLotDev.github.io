// Αντιστοιχία του πεδίου αναζήτησης και των άρθρων
const searchInput = document.getElementById('searchInput');
const articles = document.querySelectorAll('.post');

// Λειτουργία φίλτρου για την αναζήτηση
searchInput.addEventListener('keyup', function() {
    const query = searchInput.value.toLowerCase();
    const words = query.trim().split(/\s+/);

    // Δημιουργία κανονικής έκφρασης για κάθε λέξη που εισήχθη
    const regexps = words.map(word => new RegExp(`\\b${word}\\b`, 'i'));

    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        const content = article.querySelector('p').textContent.toLowerCase();

        let matchFound = false;
        for (let i = 0; i < regexps.length; i++) {
            if (regexps[i].test(title) || regexps[i].test(content)) {
                matchFound = true;
                break;
            }
        }

        if (matchFound) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});
