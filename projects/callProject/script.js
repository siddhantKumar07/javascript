let add = document.querySelector("#add");// this is for to select the add button
let close = document.querySelector(".close");//this is used for to select the close button 
let formContainer = document.querySelector(".form-container");// this is for to show the form when the add button is clicked and hide it when the close button is clicked
let createBtn = document.querySelector(".create");// this is for to select the create button
const container = document.getElementById("cards-container");// this is for to select the container where the cards will be added

//when click on add button the form will be shown
add.addEventListener("click", function () {
  formContainer.style.display = "block";
});

//when click on close button the form will be hidden
close.addEventListener("click", function () {
  formContainer.style.display = "none";
});

let count = 0;

createBtn.addEventListener("click", function () {
  // get form values
  const img = document.getElementById("img-url").value;
  const name = document.getElementById("full-name").value;
  const town = document.getElementById("home-town").value;
  const purpose = document.getElementById("purpose").value;
  const category = document.querySelector('input[name="category"]:checked')?.value;

  if (!name || !town || !purpose || !category) {
    alert("Please fill all fields!");
    return;
  }

  count++;

  // create card div
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="profile">
        <img src="${img || "https://i.pravatar.cc/100"}" alt="">
        <div>
            <h3>${name}</h3>
            <p>${town}</p>
        </div>
    </div>

    <div class="info">
        <div>
            <p>${purpose}</p>
            <span>${category}</span>
        </div>
        <div>
            <p>${count} time</p>
        </div>
    </div>

    <div class="actions">
        <button class="call">📞 Call</button>
        <button class="msg">Message</button>
    </div>
  `;

  // add to container
 container.prepend(card);

  // optional: clear form
  document.getElementById("img-url").value = "";
  document.getElementById("full-name").value = "";
  document.getElementById("home-town").value = "";
  document.getElementById("purpose").value = "";
  document.querySelectorAll('input[name="category"]').forEach(r => r.checked = false);
});


// array where all the data stored
const tasks = [];
