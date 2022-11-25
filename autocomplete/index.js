import { getSuggestion, debounce } from "./utils.js";

const inputBox = document.querySelector("#search-input");
const suggestionBox = document.querySelector("#suggestion-box");
console.log(inputBox);

const resetState = () => {
  suggestionBox.classList.remove("visible");
}

const selectingItem = (event) => {
  const { key } = event.target.dataset;

  if (key) {
    inputBox.value = key;
    resetState();
  }
}

const renderDropdownItem = (list = []) => {
  const suggFragment = document.createDocumentFragment();

  list.forEach((item) => {
    const el = document.createElement("div");
    el.innerHTML = item;
    el.classList.add("dropdown-item");
    el.setAttribute('data-key', item);
    suggFragment.appendChild(el);
  });

  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(suggFragment);
};

const handleInputChange = (event) => {
  console.log(event);
  const value = event.target.value;
  handleSearch(value);

};

const handleSearch = async (keyword) => {
  const results = await getSuggestion(keyword);
  console.log(results);

  if (results.length > 0) {
    suggestionBox.classList.add("visible");
    renderDropdownItem(results);
  } else {
    resetState();
  }

  console.log(results);
};

(() => {
  inputBox.addEventListener("input", debounce(handleInputChange, 500));
  suggestionBox.addEventListener("click", selectingItem);
})();
