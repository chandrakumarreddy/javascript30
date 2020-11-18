const url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const newQuote = document.getElementById("new-quote");
const jsTweet = document.getElementById("js-tweet");

async function fetchQuote() {
  const spinner = document.querySelector(".spinner");
  try {
    newQuote.disabled = true;
    spinner.classList.remove("hidden");
    const json = await (await fetch(url)).json();
    updateMessage(json.message);
    setTweetUrl(json.message);
  } catch (error) {
    //  don nothing
  } finally {
    newQuote.disabled = false;
    spinner.classList.add("hidden");
  }
}

function updateMessage(quote) {
  const message = document.getElementById("message");
  message.textContent = quote;
}

function setTweetUrl(quote) {
  jsTweet.setAttribute(
    "href",
    `https://twitter.com/share?text=${quote} - Donald Trump`
  );
}

fetchQuote();

newQuote.addEventListener("click", fetchQuote);
