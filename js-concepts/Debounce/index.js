document.addEventListener("DOMContentLoaded", () => {
  let dataContainer = document.querySelector(".data-container");
  let searchBox = document.querySelector("#search-box");
  let todoArr = [];
  let todosCopy = [];

  const createTodo = (data) => {
    let todoDiv = document.createElement("div");
    let userId = document.createElement("p");
    let title = document.createElement("p");

    userId.innerText = data.id;
    title.innerText = data.title;
    todoDiv.style.height = '100px';
    todoDiv.style.width = '200px';
    todoDiv.style.padding = '2px';
    todoDiv.style.margin = '20px';
    todoDiv.style.backgroundColor = '#e5e5e5';

    todoDiv.appendChild(userId);
    todoDiv.appendChild(title);

    dataContainer.appendChild(todoDiv);
  };

  const clearDataContainer = () => {
    while (dataContainer.firstChild) {
      dataContainer.removeChild(dataContainer.firstChild);
    }
  };

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => {
        todoArr = result;
        todosCopy = result;
        displayData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const displayData = (todoData) => {
    clearDataContainer();
    todoData.forEach((data) => {
      createTodo(data);
    });
  };

  const getFilterData = (searchText) => {
    if (searchText) {
      const filterData = todoArr.filter((todo) => {
        return todo.title.includes(searchText);
      });
      displayData(filterData);
    } else {
      displayData(todosCopy);
    }
  };

  // this is debounce function implementation
  const debounceFunc = (callback, delay) => {
    let timer;

    return function () {
      const context = this;
      const args = arguments;

      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        callback.apply(context, [...args]); // context is passed to maintain the correct context when it is executed inside the timeout callback
      }, delay);
    };
  };

  //this is debounce function with immediate flag
  const debounceFuncWithImmediate = (callback, delay, immediate = true) => {
    let timer;

    return function () {
      const context = this;
      const args = arguments;
      let callNow = immediate && !timer;

      if (timer) clearTimeout(timer);

      if (callNow) callback.apply(context, [...args]);

      timer = setTimeout(() => {
        callback.apply(context, [...args]); // context is passed to maintain the correct context when it is executed inside the timeout callback
      }, delay);
    };
  };

  //   const debouncedFilter = debounceFunc(getFilterData, 1000);
  const debouncedFilter = debounceFuncWithImmediate(getFilterData, 1000);

  searchBox.addEventListener("input", (e) => {
    const searchText = e.target.value;
    debouncedFilter(searchText);
  });

  getData();
});
