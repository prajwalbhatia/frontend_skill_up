import './App.css';
import FolderStructure from './FolderStructure/folderStructure';

import structureJson from './utilities/folderJson';

function App() {
  return (
    <div className="App">
        <FolderStructure
        structure={structureJson}
        />
    </div>
  );
}

export default App;
