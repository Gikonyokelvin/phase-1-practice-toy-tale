let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// get request

fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(toys => {
    const toyCollection = document.getElementById("toy-collection");
    toys.forEach(toy => {
      const toyCard = document.createElement("div");
      toyCard.className = "card";
      const toyName = document.createElement("h2");
      toyName.textContent = toy.name;
      const toyImage = document.createElement("img");
      toyImage.className = "toy-avatar";
      toyImage.src = toy.image;
      const toyLikes = document.createElement("p");
      toyLikes.textContent = `Likes: ${toy.likes}`;
      const likeBtn = document.createElement("button");
      likeBtn.className = "like-btn";
      likeBtn.id = `like-btn-${toy.id}`;
      likeBtn.textContent = "Like ";
      toyCard.append(toyName, toyImage, toyLikes, likeBtn);
      toyCollection.appendChild(toyCard);
    });
  });
  