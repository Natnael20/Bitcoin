//bitcoin api
function fetchBitcoinData() {
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    .then(response => response.json())
    .then(data => {
        // Extract Bitcoin price
        const bitcoinPrice = data.market_data.current_price.usd;

        // Create HTML content to display Bitcoin price
        const bitcoinDataHTML = `
            <p>$${bitcoinPrice}</p>
            <!-- You can add more Bitcoin data here -->
        `;

        // Display Bitcoin data on the webpage with a fade-in effect
        const bitcoinDataElement = document.getElementById("bitcoinData");
        bitcoinDataElement.innerHTML = bitcoinDataHTML;
        bitcoinDataElement.style.opacity = 1; // Make the element visible
    })
    .catch(error => {
        // Display error message if fetching data fails
        document.getElementById("bitcoinData").innerHTML = "<p>Error fetching Bitcoin data.</p>";
        console.error('Error fetching Bitcoin data:', error);
    });
}

// Fetch Bitcoin data initially
fetchBitcoinData();

// Set interval to fetch Bitcoin data every 5 minutes (adjust as needed)
setInterval(fetchBitcoinData, 5 * 60 * 1000); // 5 minutes in milliseconds
   

//slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
    slides[index].classList.add('active');
    slides[(index + 1) % slides.length].classList.add('next');
    slides[(index - 1 + slides.length) % slides.length].classList.add('prev');
    
     // Highlight the active dot
    //dots.forEach(dot => dot.classList.remove('active-dot'));
    //dots[index].classList.add('active-dot');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

showSlide(currentSlide);

// Auto advance to the next slide every 3 seconds
setInterval(nextSlide, 5000);