const structure = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'node_modules',
      isFolder: true,
      items: []
    },
    {
      name: 'public',
      isFolder: true,
      items: []
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        {
          name: 'FolderStructure',
          isFolder: true,
          items: [
            {
              name: 'folderStructure.js',
              isFolder: false,
            },
          ]
        },
        {
          name: 'App.js',
          isFolder: false,
        }
      ]
    },
    {
      name: 'index.html',
      isFolder: false,
    }
  ]
}


// const structure = {
//   name: 'root',
//   isFolder: true,
//   items: [
//     {
//       name: 'node_modules',
//       isFolder: true,
//       items: []
//     },
//     {
//       name: 'src',
//       isFolder: true,
//       items: [
//         {
//           name: 'FolderStructure',
//           isFolder: true,
//           items: [
//             {
//               name: 'folderStructure.js',
//               isFolder: false,
//             },
//           ]
//         },
//         {
//           name: 'App.js',
//           isFolder: false,
//         }
//       ]
//     },
//   ]
// }


export default structure;