//Implement an in-memory search engine where multiple documents
// could be stored under a particular namespace and search on them and
// sort the search results by passing the orderBy parameter.
//(Question from Prashant Yadhav ebook)

class InMemorySearch {
  constructor() {
    this.memory = new Map(); //Creating memory
  }

  addDocuments(key, ...newData) {
    //getting the previous data
    const prevData = this.memory.get(key);

    //If we already have this key 
    //then we will merge the data
    if (prevData) {
      this.memory.set(key, [...prevData, ...newData]);
    }
    else {
      this.memory.set(key, [...newData]);
    }
  }

  /**
   * 
   * @param {String} key - to search the documents 
   * @param {Function} filterCallback - callback function for filtering
   * @param {Object} orderBy - for data ordering
   * @returns Array of filtered object
   */
  search(key, filterCallback, orderBy = null) {
    //If key is not present than return empty array
    if (!this.memory.has(key))
      return [];

    //Getting the data for the partcular key  
    let dataToSearch = this.memory.get(key);

    //get it filter
    const filterData = dataToSearch.filter(filterCallback);

    //if order condition is mentioned
    if (orderBy) {
      const { key, asc } = orderBy;

      return filterData.sort((a, b) => {
        if (asc) {
          return a[key] - b[key]
        }
        else {
          return b[key] - a[key]
        }
      })
    }

    return filterData;
  }
}


const searchEngine = new InMemorySearch();
searchEngine.addDocuments('Movies',
  { name: 'Avenger', rating: 8.5, year: 2017 },
  { name: 'Black Adam', rating: 8.7, year: 2022 },
  { name: 'Jhon Wick 4', rating: 8.2, year: 2023 },
  { name: 'Black Panther', rating: 9.0, year: 2022 }
);
console.log(searchEngine.search('Movies', (e) => e.rating > 8.5, {
  key:
    'rating', asc: false
}));
/*
[
{
"name": "Black Panther",
"rating": 9,
"year": 2022
},
{
"name": "Black Adam",
"rating": 8.7,
"year": 2022
}
]
*/