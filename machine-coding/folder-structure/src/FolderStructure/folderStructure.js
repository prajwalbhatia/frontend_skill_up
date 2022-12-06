import React, { useState, useEffect } from 'react';

import '../../src/App.css';

function FolderStructure({ structure, handleInsertNode, handleDeleteNode, handleEditNode }) {
  const [open, setOpen] = useState(false);
  const [showInputField, setShowInputField] = useState({
    visibility: false,
    isFolder: false
  });

  const [showEditInputField, setShowEditInputField] = useState(false);
  const [editTextValue, setEditTextValue] = useState();

  useEffect(() => {
    setEditTextValue(structure.name)
  }, [structure])

  const toggleStructure = () => {
    setOpen(!open)
  }

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInputField({ visibility: true, isFolder });
    setOpen(true);
  }


  const addFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(structure.id, e.target.value, showInputField.isFolder)
      setShowInputField({ ...showInputField, visibility: false })
    }
  }

  const handleDeleteFolder = (e) => {
    handleDeleteNode(structure.id);
  }

  const handleEditFolder = (e) => {
    setShowEditInputField(true);
  }

  const editFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleEditNode(structure.id, e.target.value);
      setShowEditInputField(false)
    }
  }

  if (structure.isFolder) {
    return (
      <div className='root-structure'>
        <div className='folder'>
          {!showEditInputField && <span onClick={() => { toggleStructure() }}>📂 {structure.name}</span>}

          {showEditInputField && <input
            value={editTextValue}
            onChange={(e) => setEditTextValue(e.target.value)}
            autoFocus
            className='inputContainer__input'
            type="text"
            onBlur={() => {
              setShowEditInputField(false)
              setEditTextValue(structure.name)
            }}
            onKeyDown={(e) => { editFolder(e) }}
          />}

          {!showEditInputField && <div className='btns'>
            <button onClick={(e) => { handleDeleteFolder(e) }}>❌</button>
            <button onClick={(e) => { handleEditFolder(e, true) }}>✏️</button>
            <button onClick={(e) => { handleNewFolder(e, true) }}>Folder ➕</button>
            <button onClick={(e) => { handleNewFolder(e, false) }}>File ➕</button>
          </div>}
        </div>
        <div style={{ paddingLeft: '25px', display: 'block' }}>
          {
            showInputField.visibility
            &&
            <div className='inputContainer'>
              <span className='inputContainer__span'>{showInputField.isFolder ? '📂' : '📄'}</span>
              <input
                autoFocus
                className='inputContainer__input'
                type="text"
                onBlur={() => setShowInputField({ visibility: false, isFolder: false })}
                onKeyDown={(e) => { addFolder(e) }}
              />
            </div>
          }

          {
            open && structure.items.map((item) => <FolderStructure
              key={item.name}
              structure={item}
              handleInsertNode={(folderId, item, isFolder) => handleInsertNode(folderId, item, isFolder)}
              handleDeleteNode={(folderId) => handleDeleteNode(folderId)}
              handleEditNode={(folderId, value) => { handleEditNode(folderId, value) }}
            />)
          }
        </div>
      </div>
    )
  }
  else {
    return (
      Object.keys(structure).length > 0
      &&
      <div className='file'>
        {
          structure.name && !showEditInputField &&
          <span onClick={() => { toggleStructure() }}> 📄 {structure.name}</span>
        }

        {showEditInputField && <input
          value={editTextValue}
          onChange={(e) => setEditTextValue(e.target.value)}
          autoFocus
          className='inputContainer__input'
          type="text"
          onBlur={() => {
            setShowEditInputField(false)
            setEditTextValue(structure.name)
          }}
          onKeyDown={(e) => { editFolder(e) }}
        />}

        {!showEditInputField && <div className='btns'>
          <button onClick={(e) => { handleDeleteFolder(e) }}>❌</button>
          <button onClick={(e) => { handleEditFolder(e, true) }}>✏️</button>
        </div>}
      </div>

    )
  }
}

export default FolderStructure;