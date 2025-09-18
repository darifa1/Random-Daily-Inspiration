const inspirationEl = document.getElementById("inspiration");
const authorEl = document.getElementById("author");
const categoryEl = document.getElementById("category");
const emojiEl = document.getElementById("emoji");
const button = document.getElementById("newQuote");
const copyBtn = document.getElementById("copyQuote");
const shareBtn = document.getElementById("shareQuote");

const quotes = [
  {text:"Believe in yourself and all that you are.", author:"Christian D. Larson", category:"Motivation", emoji:"💪"},
  {text:"Do something today that your future self will thank you for.", author:"Anonymous", category:"Motivation", emoji:"🚀"},
  {text:"Every day is a second chance.", author:"Unknown", category:"Life Tip", emoji:"🌞"},
  {text:"Mistakes are proof that you are trying.", author:"Jennifer Lim", category:"Motivation", emoji:"🔥"},
  {text:"Happiness is not by chance, but by choice.", author:"Anonymous", category:"Life Tip", emoji:"😊"},
  {text:"Be the reason someone smiles today.", author:"Anonymous", category:"Kindness", emoji:"💖"},
  {text:"Dream big, start small, act now.", author:"Robin Sharma", category:"Motivation", emoji:"🌟"},
  {text:"Why don’t scientists trust atoms? Because they make up everything!", author:"Unknown", category:"Humor", emoji:"😂"},
  {text:"Keep going, you are getting there.", author:"Unknown", category:"Motivation", emoji:"🏃‍♀️"},
  {text:"Your potential is endless.", author:"Unknown", category:"Motivation", emoji:"✨"}
];

const colors = ["#FFADAD","#FFD6A5","#FDFFB6","#CAFFBF","#9BF6FF","#A0C4FF","#BDB2FF","#FFC6FF"];

function showQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Fade out
  inspirationEl.style.opacity = 0;
  authorEl.style.opacity = 0;
  categoryEl.style.opacity = 0;
  emojiEl.style.transform = "scale(0.5)";

  setTimeout(() => {
    inspirationEl.textContent = `"${randomQuote.text}"`;
    authorEl.textContent = `— ${randomQuote.author}`;
    categoryEl.textContent = randomQuote.category;
    emojiEl.textContent = randomQuote.emoji;

    // Fade in
    inspirationEl.style.opacity = 1;
    authorEl.style.opacity = 1;
    categoryEl.style.opacity = 1;
    emojiEl.style.transform = "scale(1)";
    document.body.style.backgroundColor = randomColor;
  }, 400);
}

// Copy quote to clipboard
copyBtn.addEventListener("click", () => {
  const fullQuote = `${emojiEl.textContent} ${inspirationEl.textContent} ${authorEl.textContent}`;
  navigator.clipboard.writeText(fullQuote).then(() => {
    alert("Quote copied to clipboard!");
  });
});

// Share on Twitter
shareBtn.addEventListener("click", () => {
  const text = encodeURIComponent(`${emojiEl.textContent} ${inspirationEl.textContent} ${authorEl.textContent}`);
  const url = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(url, "_blank");
});

button.addEventListener("click", showQuote);

// Show initial quote
showQuote();
