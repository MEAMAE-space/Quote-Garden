const quotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Don't limit your challenges. Challenge your limits.", author: "Jerry Dunn" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Don't watch the clock;do what it does.Keep going.", author: "Sam Levenson"},
  { text: "Act as if what you do makes a difference.It does.", author: "William James"},
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis"},
  { text: "Everything you can imagine is real.", author: "Pablo Picasso"},
  { text: "Hustle beats talent when talent doesn't hustle.", author: "Ross Simmonds"},
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem"},
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky"},
  { text: "If you are going through hell,keep going. ", author: "Winston Churchill"},
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown"},
  { text: "Failure is not the opposite of success,it's part of success.", author: "Arianna Huffington"},
  { text: "Succes usually comes to those people who are too busy to be looking for it.", author: "Henry David Thoreau"},
  { text: "The way to get started is to quit talking and start doing.", author: "Walt Disney"},
  { text: "Great things never come from comfort zones.", author: "Unknown"},
  { text: "Wake up wwith determination. Go to bed with satisfaction.", author: "Unknown"},
  { text: "Small steps everyday.", author: "Unknown"},
  { text: "Don't wait for opportunity.Create it.", author: "Unknown"},
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey"},
  { text: "Work hard in silence, let success make the noise.", author: "Unknown"},
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Rossevelt"},
  { text: "A little progress each day adds up to big results.", author: "Unknown"},
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln"},
  { text: "Success is whant comes after you stop making excuses.", author: "Unknown"},
  { text: "Stay hungry. Stay foolish.", author: "Steve Jobs"},
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser"},
  { text: "Keep going. Everything you need will come to you.", author: "Unknown"},
  { text: "If you can dream it, you can do it.", author: "Walt Disney"},
  { text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'", author: "Mary Anne Radmacher"},
  { text: "Do something today that your future sekf will thank you for.", author: "Unknown"},
  { text: "Learn as if you will live forever, live like you will die tomorrow.", author: "Mahatma Gandhi"},
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke"},
  { text: "I can and I will. Watch me.", author: "Unknown"},
  { text: "Make today so awesome that yesterday gets jealous.", author: "Unknown"},
  { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett"},
  { text: "Nothing will work unless you do.", author: "Maya Angelou"},
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar"},
  { text: "What you get by achieving your goals is not a important as what you become by achieving your goals.", author: "Zig Ziglar"},
  { text: "You are stronger than you think", author: "Unknown"},
  { text: "Keep your face always towards the sunshine - and shadows will fallbehind you. ", author: "Walt Whitman"},
  { text: "Let your faith be bigger than your fear.", author: "Unknown"},
  { text: "Progress, not perfection.", author: "Unknown"},
  { text: "Do not wait; the time will never be 'just right'. Start where you stand.", author: "Napolean Hill"},
  { text: "Don't quit. Suffer now and live the rest of your life as a champion.", author: "Muhammad Ali"},
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain"},
  { text: "Success is loving yourself, loving what you do, and loving how you do it.", author: "Maya Angelou"},
  { text: "Stars can't shine without darkness.", author: "Unknown"},
  { text: "You were born to be real, not perfect.", author: "Unknown"},
  { text: "Chase your passion, not your pension.", author: "Denis Waitley"},
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb"},
  { text: "Life is 10% what happens to us and 9o% how we react to it.", author: "Charles R. Swindoll"},
  { text: "Don't be afraid to give up the good for the great.", author: "John D. Rockefeller"},
  { text: "Your only limit is your mind.", author: "Unknown"},
  { text: "Make it happen. Shock everyone.", author: "Unknown"},
  { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin"},
  { text: "I never dreamed about success. I worked for it.", author: "Estee Lauder"},
  { text: "You are artist of your own life. Don't hand the paintbrush to anyone else.", author: "Unknown"},
  { text: "You only fail when you stop trying.", author: "Unknown"},
  { text: "Don't downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny.", author: "Stuart Scott"},
  { text: "Winners are not afraid of losing. But losers are.", author: "Robert Kiyosaki"},
  { text: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill"},
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius"},
  { text: "Stay focused and never give up.", author: "Unknown"},
  { text: "Grow through what you go through.", author: "Unknown"},
  { text: "You are capable of amazing things.", author: "Unknown"},
  { text: "Don't count the days, make the days count.", author: "Muhammad Ali"},
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupery"},
  { text: "Be stronger than your excuses.", author: "Unknown"},
  { text: "Worry less. Do more.", author: "Unknown"},
  { text: "There's no traffic after the extra mile.", author: "Unknown"},
  { text: "Your life does not get better by chance, it gets better by change.", author: "Jim Rohn"},
  { text: "Never stop learning because lfe never stops teaching.", author: "Unknown"},
  { text: "Difficult roads often lead to beautiful destinations.", author: "Unknown"},
  { text: "You didn't come this far to only come this far.", author: "Unknown"},
  { text: "Don't be average. Be savage.", author: "Unknown"},
  { text: "Slay your day.", author: "Unknown"},
  { text: "Stop doubting yourself. Work hard, and make it happen.", author: "Unknown"},
  { text: "Be a voice, not an echo.", author: "Albert Einstein"},
  { text: "Pain is temporary. Greatness is forever", author: "Unknown"},
  { text: "Work until your idols become your rivals.", author: "Unknown"},
  { text: "Confidence comes from discipline and training ", author: "Robert Kiyosaki"},
  { text: "You don't find willpower, you create it.", author: "Unknown"},
  { text: "Don't stop when you're tired. Stop when you're done.", author: "Unknown"},
  { text: "Greatness begins beyond your comfort zone.", author: "Unknown"},
  { text: "When you feel like quitting, remember why you started.", author: "Unknown"},
  { text: "Make yourself proud.", author: "Unknown"},
  { text: "You were not born to be average.", author: "Unknown"},
  { text: "Stay humble. Work hard. Be kind.", author: "Unknown"},
  { text: "Train your mind to see the good in everything.", author: "Unknown"},
  { text: "Big journeys begin  with small steps.", author: "Unknown"},
  { text: "Your vibe attracts your tribe.", author: "Unknown"},
  { text: "Every accomplishment starts with the decision to try.", author: ""},
  { text: "Wake, Pray. Slay.", author: "Unknown"},
  { text: "This is your moment. Own it.", author: "Unknown"},
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world", author: "Roy T. Bennett"},
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" }
];

/* ─── DOM references ──────────────────────────────── */
const quoteBox   = document.getElementById('quote-container');
const nextBtn    = document.getElementById('next-quote');
const themeBtn   = document.getElementById('theme-toggle');
const viewBtn    = document.getElementById('view-toggle');
const favViewBtn = document.getElementById('fav-view-toggle');
const gridWrap   = document.getElementById('quote-grid');

/* ─── Favorites storage ───────────────────────────── */
let favorites = JSON.parse(localStorage.getItem("favQuotes") || "[]");
const isFavorited = txt => favorites.includes(txt);

function toggleFavorite(txt, btn){
  favorites = isFavorited(txt) ? favorites.filter(q=>q!==txt) : [...favorites,txt];
  localStorage.setItem("favQuotes", JSON.stringify(favorites));
  btn.classList.toggle("favorited", isFavorited(txt));
  btn.textContent = isFavorited(txt) ? "❤️" : "🤍";
  if(currentView==='favorites') renderFavorites();
}

/* ─── HTML builders ───────────────────────────────── */
const quoteHTML = q => `
  <button class="fav-btn ${isFavorited(q.text)?'favorited':''}">
    ${isFavorited(q.text)?"❤️":"🤍"}
  </button>
  <blockquote id="typed-quote"></blockquote>
  <figcaption>— ${q.author}</figcaption>
`;

function populateGrid(list = quotes){
  gridWrap.innerHTML = list.map(q=>`
    <figure class="quote-card">
      <button class="fav-btn ${isFavorited(q.text)?'favorited':''}">
        ${isFavorited(q.text)?"❤️":"🤍"}
      </button>
      <blockquote>“${q.text}”</blockquote>
      <figcaption>— ${q.author}</figcaption>
    </figure>
  `).join('');

  gridWrap.querySelectorAll(".quote-card").forEach(card=>{
    const btn = card.querySelector(".fav-btn");
    const text = card.querySelector("blockquote").innerText.replace(/[“”]/g,'');
    btn.addEventListener('click', ()=>toggleFavorite(text,btn));
  });
}

const renderFavorites = () => populateGrid(quotes.filter(q=>isFavorited(q.text)));

/* ─── Typing effect ───────────────────────────────── */
function typeText(el, text, speed=30){
  el.textContent=''; let i=0;
  const type=()=>{ if(i<text.length){ el.textContent+=text.charAt(i++); setTimeout(type,speed);} };
  type();
}

/* ─── Color palettes ──────────────────────────────── */
const lightColors = ["#f7e46d","#f8b5c1","#a2c7a2","#fff8b3","#c1f0c1","#ffd1dc"];
const darkColors  = ["#f7e46d","#f8b5c1","#a2c7a2","#ffd1dc"];

/* ─── Random Quote view ───────────────────────────── */
function showRandomQuote(){
  const q = quotes[Math.floor(Math.random()*quotes.length)];
  const colors = document.body.classList.contains('dark') ? darkColors : lightColors;
  const randomColor = colors[Math.floor(Math.random()*colors.length)];

  // fade out
  quoteBox.style.opacity=0;

  setTimeout(()=>{
    quoteBox.innerHTML = quoteHTML(q);
    quoteBox.style.backgroundColor = randomColor;

    const block = document.getElementById('typed-quote');
    typeText(block, `“${q.text}”`, 30);

    const btn = quoteBox.querySelector('.fav-btn');
    btn.addEventListener('click', ()=>toggleFavorite(q.text,btn));

    // fade in
    quoteBox.style.opacity=1;
  },200);
}

/* ─── Theme toggle ─────────────────────────────────── */
themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '🌞 Light Mode' : '🌙 Dark Mode';
  // refresh color of current random note if in random view
  if(currentView==='random') showRandomQuote();
});

/* ─── View management ─────────────────────────────── */
let currentView='random';

function switchView(view){
  currentView=view;
  quoteBox.style.display = view==='random' ? 'block' : 'none';
  nextBtn.style.display  = view==='random' ? 'block' : 'none';
  gridWrap.style.display = view!=='random' ? 'grid' : 'none';

  if(view==='grid'){
    populateGrid();          viewBtn.textContent="🎲 Random View"; favViewBtn.textContent="❤️ Favorites";
  }else if(view==='favorites'){
    renderFavorites();       viewBtn.textContent="📋 Grid View";   favViewBtn.textContent="🎲 Random View";
  }else{
    showRandomQuote();       viewBtn.textContent="📋 Grid View";   favViewBtn.textContent="❤️ Favorites";
  }
}

/* ─── Button listeners ────────────────────────────── */
nextBtn.addEventListener('click', showRandomQuote);
viewBtn.addEventListener('click', ()=> switchView(currentView==='random' ? 'grid' : 'random'));
favViewBtn.addEventListener('click',()=> switchView(currentView==='favorites' ? 'random' : 'favorites'));

/* ─── Init ─────────────────────────────────────────── */
populateGrid();
showRandomQuote();