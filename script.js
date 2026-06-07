const quoteText = document.getElementById("quoteText");
const summaryText = document.getElementById("summaryText");
const sourceText = document.getElementById("sourceText");
const quoteCard = document.getElementById("quoteCard");

let currentIndex = Math.floor(Math.random() * QUOTES.length);

function renderQuote(index) {
  const item = QUOTES[index];

  quoteText.textContent = item.quote;
  summaryText.textContent = item.summary;
  sourceText.textContent = item.source;

  fitToScreen();
}

function fitToScreen() {
  quoteCard.style.transform = "scale(1)";

  requestAnimationFrame(() => {
    const available = window.innerHeight * 0.92;
    const used = quoteCard.scrollHeight;

    if (used > available) {
      const scale = Math.max(0.72, available / used);
      quoteCard.style.transform = `scale(${scale})`;
      quoteCard.style.transformOrigin =
        window.innerWidth < 680 ? "left bottom" : "left center";
    }
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % QUOTES.length;
  renderQuote(currentIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + QUOTES.length) % QUOTES.length;
  renderQuote(currentIndex);
});

document.getElementById("randomBtn").addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * QUOTES.length);
  renderQuote(currentIndex);
});

window.addEventListener("resize", () => renderQuote(currentIndex));

renderQuote(currentIndex);
