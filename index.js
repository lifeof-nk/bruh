let items = [];
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
    (value) => `<li> ${value} <button class="removeBtn"> Del </button></li> `
  );
  list.innerHTML = item.join("");

  const removeBtns = document.querySelectorAll(".removeBtn");
  removeBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      const id = index;
      e.target.previousSibling.remove(); // remove the li element
      e.target.remove(); // remove the button element
      items = items.filter((item) => {
        return item !== items[id];
      });
      render();
    });
  });
}
