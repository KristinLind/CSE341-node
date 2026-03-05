console.log("SCRIPT LOADED");

fetch(`${window.location.origin}/professional`)
  .then(response => response.json())
  .then(data => {

    console.log("MongoDB Data:", data);

    if (!data || data.length === 0) return;

    const contact = data[0];

    // Set accent color from MongoDB
    document.documentElement.style.setProperty("--accent", contact.favoriteColor);

    const name = document.getElementById("professionalName");
    const desc = document.getElementById("primaryDescription");

    const birthday = new Date(contact.birthday).toLocaleDateString();

    if (name) {
      name.textContent = `${contact.firstName} ${contact.lastName}`;
    }

    if (desc) {
      desc.innerHTML = `
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Favorite Color:</strong> ${contact.favoriteColor}</p>
      <p><strong>Birthday:</strong> ${birthday}</p>
      <p>
        <a href="${contact.github}" target="_blank">GitHub</a> |
        <a href="${contact.linkedin}" target="_blank">LinkedIn</a>
      </p>
      `;
    }

  })
  .catch(err => console.error(err));