console.log("SCRIPT LOADED");

fetch(`${window.location.origin}/professional`)
  .then(response => response.json())
  .then(data => {

    console.log("Professional Data:", data);

    const name = document.getElementById("professionalName");
    const desc = document.getElementById("primaryDescription");

    if (name) {
      name.textContent = data.professionalName;
    }

    if (desc) {
      desc.innerHTML = `
        <p>${data.primaryDescription}</p>
        <p>${data.workDescription1}</p>
        <p>${data.workDescription2}</p>
        <p>
          <a href="${data.githubLink.link}" target="_blank">${data.githubLink.text}</a> |
          <a href="${data.linkedInLink.link}" target="_blank">${data.linkedInLink.text}</a>
        </p>
      `;
    }

  })
  .catch(error => console.error("Fetch error:", error));