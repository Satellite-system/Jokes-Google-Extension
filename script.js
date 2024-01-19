fetch("https://icanhazdadjoke.com/slack")
  .then((data) => data.json())
  .then((data) => {
    const jokeTxt = data.attachments[0].text;

    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML = jokeTxt;
  });
