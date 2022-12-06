import { useEffect, useState } from 'react';
import './App.css';
import FolderStructure from './FolderStructure/folderStructure';
import useTraverseTree from './hooks/useTraverseTree';

import structureJson from './utilities/folderJson';

function App() {
  const [structureData, setStructureData] = useState({});
  console.log('🚀 ~ file: App.js ~ line 10 ~ App ~ structureData', structureData);

  const { insertNode, deleteNode, updateNode } = useTraverseTree();

  useEffect(() => {
    setStructureData({ ...structureJson });
  }, [])

  const handleInsertNode = (folderId, item, isFolder) => {
    const updatedStructure = insertNode(structureData, folderId, item, isFolder);
    setStructureData(updatedStructure);

  }

  const handleDeleteNode = (folderId) => {
    const updatedStructure = deleteNode(structureData, folderId);
    setStructureData(updatedStructure);
  }

  const handleEditNode = (folderId, value) => {
    const updatedStructure = updateNode(structureData, folderId, value);
    setStructureData(updatedStructure);
  }

  return (
    <div className="App">
      <FolderStructure
        structure={structureData}
        handleInsertNode={(folderId, item, isFolder) => handleInsertNode(folderId, item, isFolder)}
        handleDeleteNode={(folderId) => handleDeleteNode(folderId)}
        handleEditNode={(folderId, value) => handleEditNode(folderId, value)}
      />
    </div>
  );
}

export default App;
