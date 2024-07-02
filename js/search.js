// Αντιστοιχία του πεδίου αναζήτησης και των άρθρων
const searchInput = document.getElementById('searchInput');
const articles = document.querySelectorAll('.post');

// Λειτουργία φίλτρου για την αναζήτηση
searchInput.addEventListener('keyup', function() {
    const query = searchInput.value.toLowerCase();
    
    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        const content = article.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query) || content.includes(query)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});
