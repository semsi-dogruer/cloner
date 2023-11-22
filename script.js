let horsey = [
  {
    id: 1,
    name: "Horsey",
    image: "./horsey.jpg",
  },
];

const horseyContainer = document.querySelector("#horseyContainer");
const select = document.querySelector("#selectClone");

select.addEventListener("change", function (event) {
  const id = +event.target.value;
  const updateHorsey = horsey.filter((clone) => clone.id !== id);
  horsey = updateHorsey;
  render();
});

function render() {
  horseyContainer.replaceChildren();
  select.replaceChildren();
  for (let clone of horsey) {
    const div = document.createElement("div");
    div.className = "clone";
    const h2 = document.createElement("h2");
    h2.textContent = clone.name;
    div.appendChild(h2);
    const p = document.createElement("p");
    p.textContent = `ID: ${clone.id}`;
    div.appendChild(p);
    const img = document.createElement("img");
    img.src = clone.image;
    div.appendChild(img);
    const button = document.createElement("button");
    button.textContent = "CLONE ME!!!";
    button.addEventListener("click", function () {
      horsey.push({ ...clone, id: horsey.length + 1 });
      render();
    });
    div.appendChild(button);
    horseyContainer.appendChild(div);

    const option = document.createElement("option");
    option.textContent = clone.id;
    select.appendChild(option);
  }
}

render();
