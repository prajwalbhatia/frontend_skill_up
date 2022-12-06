import { getSuggestion, debounce } from "./utils.js";

const inputBox = document.querySelector("#search-input");
const suggestionBox = document.querySelector("#suggestion-box");

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

  if(list.length > 0)
  {
    list.forEach((item) => {
      const el = document.createElement("div");
      el.innerHTML = item;
      el.classList.add("dropdown-item");
      el.setAttribute('data-key', item);
      suggFragment.appendChild(el);
    });
  }
  else
  {
    const el = document.createElement("div");
    el.innerHTML = "No Suggestion";
    el.classList.add("dropdown-item");
    el.setAttribute('data-key', "No suggestion");
    suggFragment.appendChild(el);
  }


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

  if(keyword.length === 0)
  {
    resetState();
  }
  else
  {
    suggestionBox.classList.add("visible");
    renderDropdownItem(results);
  }
};

(() => {
  inputBox.addEventListener("input", debounce(handleInputChange, 500));
  suggestionBox.addEventListener("click", selectingItem);
})();
