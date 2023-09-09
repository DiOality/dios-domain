const dataOutput = document.querySelector(".dataOutput");

const URL = `https://animechan.xyz/api/random/anime?title=hunter`;

async function getData() {
  const response = await fetch(`${URL}`);
  const apiData = await response.json();
  return apiData;
}

document.addEventListener("DOMContentLoaded", async () => {
  let apiData = [];

  try {
    apiData = await getData();
  } catch (error) {
    console.log(error);
  }

  console.log(apiData);

  const quoteText = document.createElement("p");
  quoteText.innerText = `"${apiData.quote}"`;
  quoteText.classList.add("quote");

  const character = document.createElement("p");
  character.innerText = `${apiData.character}:`;
  character.classList.add("character");

  dataOutput.append(character);
  dataOutput.append(quoteText);
});
