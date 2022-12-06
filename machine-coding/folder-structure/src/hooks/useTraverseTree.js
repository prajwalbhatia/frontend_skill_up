const useTraverseTree = () => {
  /**
   * 
   * @param {Object} tree 
   * @param {String} folderId 
   * @param {Object} item 
   * @param {Bool} isFolder 
   */
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: []
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    })

    return { ...tree, items: latestNode }
  }

  function deleteNode(tree, folderId) {
    if (tree.id === folderId) {
      return {};
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return deleteNode(obj, folderId);
    });

    return { ...tree, items: latestNode.filter(value => Object.keys(value).length !== 0) }
  }

  function updateNode(tree, folderId, value) {
    if (tree.id === folderId) {
      return { ...tree, name: value };
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return updateNode(obj, folderId , value);
    });

    return { ...tree, items: latestNode.filter(value => Object.keys(value).length !== 0) }
  }

  return { insertNode, deleteNode, updateNode };
}

export default useTraverseTree;