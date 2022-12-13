//What is LRU?
//1) It is Least Recenty Used cache
//2) It is caching policy that is used to remove elements from the cache to make room for new elements if the cacahe is full

//OPERATIONS
//1) Add elements (if is full then we have to remove least used item and add the new item)
//2) Access elements (now as we have accessed a value therefore we have to add that particular item to the first as it now became most recently used item)
//3) Remove element from cache
//4) Update a value

//(Question from Prashant Yadhav ebook)


class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

const LRUCache = function (cap) {
  this.cap = cap;
  this.count = 0;
  this.head = null;
  this.tail = null;
  this.cache = new Map();


  this.get = function (key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const node = this.cache.get(key);
    this.use(key);
    return node.value;
  }

  this.put = function (key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.use(key);
      this.cache.set(key, node);
    }
    else {
      if (this.count >= this.cap) {
        this.evict();
      }

      this.insert(key, value);
    }
  }

  this.use = function (key) {
    const node = this.cache.get(key);

    if (node === this.head) {
      return;
    }
    else if (node === this.tail) {
      node.prev.next = null;
      this.tail = node.prev;
      node.prev = null;
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    else {
      if (node.prev) {
        node.prev.next = node.next;
      }

      if (node.next) {
        node.next.prev = node.prev;
      }

      node.next = this.head;
      node.prev = null;
      this.head.prev = node;
      this.head = node;
    }
  }


  this.evict = function () {
    const keyToEvict = this.tail ? this.tail.key : null;

    if (!this.tail)
      return
    else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }

    if (keyToEvict) {
      this.count--;
      this.cache.delete(keyToEvict);
    }
  }

  this.insert = function (key, value) {
    const node = new Node(key, value);
    this.count++;
    this.cache.set(key, node);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  this.display = function () {
    let current = this.head;

    while (current) {
      console.log(current.key, current.value);
      current = current.next;
    }
  }

}

const lru = new LRUCache(4);

lru.put(1, 'a');
lru.put(2, 'b');
lru.put(3, 'c');
lru.put(4, 'd');
lru.use(2);
lru.display();