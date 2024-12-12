/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays for domain generation
  let pronoun = ["I", "you", "he", "she", "it", "we", "they"];
  let adj = ["great", "big", "small", "fast"];
  let noun = ["jogger", "racoon", "accelerator", "account"];
  let tlds = [".com", ".us", ".shop", ".org"];

  let arrOfDomains = [];

  // Generate all domain combinations
  for (let i = 0; i < tlds.length; i++) {
    for (let j = 0; j < noun.length; j++) {
      for (let g = 0; g < adj.length; g++) {
        for (let h = 0; h < pronoun.length; h++) {
          arrOfDomains.push(`${pronoun[h]}${adj[g]}${noun[j]}${tlds[i]}`);
        }
      }
    }
  }

  //function to get a specific number of random domains
  function getRandomDomains(arr, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.push(arr[randomIndex]);
    }
    return result;
  }

  // Event listener for generating domains
  document.getElementById("generateBtn").addEventListener("click", () => {
    const count = parseInt(document.getElementById("domainCount").value, 10);
    const domainListElement = document.getElementById("domainList");

    if (!count || count < 1) {
      domainListElement.innerHTML = `<p style="color: red;">Please enter a valid number!</p>`;
      return;
    }

    const randomDomains = getRandomDomains(arrOfDomains, count);

    // Display the generated domains
    domainListElement.innerHTML = `<ul>${randomDomains
      .map(domain => `<li>${domain}</li>`)
      .join("")}</ul>`;
  });
};
