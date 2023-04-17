const items = [];
const addBtn = document.getElementById("add-btn");
const deleteAllBtn = document.getElementById("delete-all");
const list = document.getElementById("list");
const inputEl = document.getElementById("input-el");

addBtn.addEventListener("click", function () {
  //   console.log(items);
  items.push(inputEl.value);
  inputEl.value = "";
  render();
});

function render() {
  const item = items.map(
    (value) => `<li> ${value} </li> <button> Del </button>`
  );
  list.innerHTML = item;
}
