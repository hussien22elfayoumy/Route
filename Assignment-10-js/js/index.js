var quotes = [
  {
    quoteName:
      '“It is our choices, Harry, that show what we truly are, far more than our abilities.”',
    author: '― J.K. Rowling',
  },
  {
    quoteName:
      '“Insanity is doing the same thing, over and over again, but expecting different results.”',
    author: '― Narcotics Anonymous',
  },
  {
    quoteName:
      '“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”',
    author: '― John Green',
  },
  {
    quoteName: '“You only live once, but if you do it right, once is enough.”',
    author: '― Mae West',
  },
  {
    quoteName:
      '“It is better to be hated for what you are than to be loved for what you are not.”',
    author: '― Andre Gide, Autumn Leaves',
  },
  {
    quoteName: "“If you tell the truth, you don't have to remember anything.”",
    author: '― Mark Twain',
  },
  {
    quoteName:
      '“A friend is someone who knows all about you and still loves you.”',
    author: '― Elbert Hubbard',
  },
  {
    quoteName:
      '“To live is the rarest thing in the world. Most people exist, that is all.”',
    author: '― Oscar Wilde',
  },
  {
    quoteName: '“Always forgive your enemies; nothing annoys them so much.”',
    author: '― Oscar Wilde',
  },
  {
    quoteName:
      '“Live as if you were to die tomorrow. Learn as if you were to live forever.””',
    author: '― Mahatma Gandhi',
  },
];

// TODO: will return random number from 0 to the (length of array -1)
function randNumber() {
  return Math.floor(Math.random() * quotes.length);
}

function displayQuote() {
  var currQuoteName = document.getElementById('quoteName');
  var index = randNumber();
  var quoteName = quotes[index].quoteName;
  var quoteAuther = quotes[index].author;

  if (currQuoteName?.textContent === quoteName) {
    index = randNumber();
    quoteName = quotes[index].quoteName;
    quoteAuther = quotes[index].author;
    console.log(index);
  }

  document.getElementById('quote').innerHTML = `
	<blockquote>
	<p id='quoteName'>${quoteName}</p>
	<cite>${quoteAuther}</cite>
	</blockquote>
	`;
}
