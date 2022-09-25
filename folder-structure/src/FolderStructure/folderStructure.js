import React, { useState } from 'react';

function FolderStructure({ structure  }) {

  const [open, setopen] = useState(false);

  const toggleStructure = () => {
    setopen(!open)
  }

  if (structure.isFolder) {
    return (
      <div>
        <span onClick={() => { toggleStructure() }}>{structure.name}</span>

        <div style={{ paddingLeft: '5px', display: 'block' }}>
          {
            open && structure.items.map((item) => <FolderStructure key={item.name} structure={item} />)
          }
        </div>
      </div>
    )
  }
  else {
    return (
      <div>
        <span onClick={() => { toggleStructure() }}>{structure.name}</span>
      </div>
    )
  }
}

export default FolderStructure;