/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  // Creating an array of objects to store quote, source, citation, year, and tag
  let quotes = [
    {
      quote: 'You are only as free as you think you are and freedom will always be as real as you believe it to be.',
      source: 'Robert M. Drake'
    },
    {
      quote: 'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.',
      source: 'Albert Einstein'
    },
    {
      quote: 'Being able to depend on someone doesn\'t mean you\'re dependent on them.',
      source: 'Sarah Rees Brennan',
      citation: 'Untold',
      year: 2013 
    },
    {
      quote: 'Never to suffer would never to have been blessed.',
      source: 'Edgar Allan Poe'
    },
    {
      quote: 'Be yourself; everyone else is already taken.',
      source: 'Oscar Wilde'
    },
    {
      quote: 'Your pain is the breaking of the shell that encloses your understanding.',
      source: 'Kahlil Gibran'
    },
    {
      quote: 'Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.',
      source: 'Martin Luther'
    },
    {
      quote: 'Maybe you are searching among the branches, for what only appears in the roots.',
      source: 'Rumi'
    },
    {
      quote: 'Most people would sooner die than think; in fact, they do so.',
      source: 'Bertrand Russell'
    },
    {
      quote: 'I have never let my schooling interfere with my education.',
      source: 'Mark Twain'
    },
    {
      quote: 'Sometimes you have to shut your eyes, so you can see the real beauty.',
      source: 'Kilian Jornet'
    },
    {
      quote: 'To be truly positive in the eyes of some, you have to risk appearing negative in the eyes of others.',
      source: 'Criss Jami'
    },
    {
      quote: 'Life is not a matter of holding good cards, but of playing a poor hand well.',
      source: 'Robert Louis Stevenson'
    },
    {
      quote: 'Judge a man by his questions rather than his answers.',
      source: 'Voltaire'
    },
    {
      quote: 'The quieter you become, the more you are able to hear.',
      source: 'Rumi'
    },
    {
      quote: 'Do or do not, there is no try.',
      source: 'Yoda'
    },
    {
      quote: 'The man who removes a mountain begins by carrying away small stones.',
      source: 'William Faulkner'
    },
    {
      quote: 'Everyone thinks of changing the world, but no one thinks of changing himself.',
      source: 'Leo Tolstoy' 
    },
    {
      quote: 'To thine own self be true.',
      source: 'William Shakespeare'
    },
    {
      quote: 'Leave no stone unturned.',
      source: 'Euripides'
    },
    {
      quote: 'It can take years to mold a dream. It takes only a fraction of a second for it to be shattered.',
      source: 'Mary E. Pearson',
      citation: 'The Kiss of Deception',
      year: 2014 
    },
    {
      quote: 'It is very strange that the years teach us patience - that the shorter our time, the greater our capacity for waiting.',
      source: 'Elizabeth Taylor',
      citation: 'A Wreath of Roses',
      year: 1949,
      tag: 'Time'
    },
    {
      quote: 'Time gliding by without our knowledge cheats us, and nothing can be swifter than the years.',
      source: 'Ovid',
      citation: 'Metamorphoses',
      tag: 'Time'
    }
  ];

//This function will randomly select the background color
function getRandomColor() {
  let red = Math.floor( Math.random() * 256 );
  let green = Math.floor( Math.random() * 256 );
  let blue = Math.floor( Math.random() * 256 );
  let randomColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = randomColor;
  return randomColor;
}

//This function will randomly select one object from the quotes array
function getRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

//This function concatenates all properties of the quote object into an html string
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;

  if (randomQuote.citation != null) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year != null) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.tag != null) {
    html += `<span class="tag">${randomQuote.tag}</span>`;
  }

  html += `</p>`;

  getRandomColor();
  document.getElementById('quote-box').innerHTML = html; 
  return html;
}

//This prints a new random quote every 15 seconds
setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);