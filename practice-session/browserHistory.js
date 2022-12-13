// You must be familiar with browser history and its functionality where
// you can navigate through the browsed history.Implement the same.
// It will have the following functionality

// visit(url) : Marks the entry of the URL in the history.
// current() : Returns the URL of the current page.
// backward() : Navigate to the previous url.
// forward() : Navigate to the next url.

function BrowserHistory() {
  let history = [];
  let currentIndex = -1;

  this.visit = (url) => {
    history.push(url);
    currentIndex++;
  }

  this.current = () => {
    let currentUrl = null;
    if (history.length) {
      currentUrl = history[currentIndex];
      currentIndex--;
    }

    return currentUrl;
  }

  this.backward = () => {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }

  this.forward = () => {
    if (currentIndex < history.length - 1) {
      currentIndex++;
    }
  }

}

const bh = new BrowserHistory();
bh.visit('google.com');
bh.visit('bikes');
bh.visit('royal enfield');
bh.backward()
bh.backward()
bh.forward();
bh.forward();


console.log(bh.current());