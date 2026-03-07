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
    <p><strong>${contact.firstName}</strong> is a full-stack web development student who is currently learning backend API development with MongoDB.</p>

    <p class="links">
      <a href="${contact.github}" target="_blank">GitHub</a> |
      <a href="${contact.linkedin}" target="_blank">LinkedIn</a>
    </p>
    `;
    }

  })
  .catch(error => console.error("Fetch error:", error));