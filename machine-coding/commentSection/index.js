const commentInput = document.querySelector('#commentInput');
const commentBtn = document.querySelector('#commentBtn');
const parent = document.querySelector('#parent');

let comments = [];

//LISTENERS
let commentValue = '';
commentInput.addEventListener('input', (e) => {
  commentValue = e.target.value;
});

commentBtn.addEventListener('click', (e) => {
  submitComment(e)
});
//LISTENERS


//FUNCTIONS
function submitComment(e , keyAt)
{
  let keyAtt = e.target.dataset.key || keyAt;

  //Creating comment obj and pushing to arr
  const commentObj = createCommentObj(keyAtt);
  commentObj.comment = commentValue
  comments.push(commentObj);

  //removing the previous comment section div
  const sec = document.querySelector('#commentSection');
  if (sec)
    sec.remove();

  //creating new comment section div  
  const commentSection = document.createElement('div');
  commentSection.id = 'commentSection';
  commentSection.addEventListener('click', (e) => replyClicked(e))

  //converting the flat comments array to nested one
  const convertedComments = convertComments(null, null);
  loopingOverComments(convertedComments, commentSection);

}

/**
 * 
 * @param {Array} convertedComments - array of objects containing comments with nested children 
 * @param {Object} commentSection - elemnt having id commentSection 
 */
function loopingOverComments(convertedComments, commentSection)
{
  //Creating comment ui for each comment
  convertedComments.forEach((comment) => {
    createComment(comment, commentSection);

    //if comment has children then looping over again
    if(comment.children.length > 0)
    {
      loopingOverComments(comment.children , commentSection)
    }
  })
}

/**
 * 
 * @param {Object} parent - parent object 
 * @param {String} parentId 
 * @returns 
 */
function convertComments(parent, parentId) {
  //Filtering with parentId (which is null in initial case)
  const filterWithParentId = comments.filter((comment) => comment.parentId === parentId);

  //adding the childrens to children array
  if (parent && filterWithParentId.length > 0) {
    parent.children = [...filterWithParentId];
  }
  
  //looping over the comments
  if (filterWithParentId.length > 0) {
    filterWithParentId.filter((comment) => {
      convertComments(comment, comment.id)
    })
  }

  return filterWithParentId;
}

/**
 * 
 * @param {Object} comment - comment object
 * @param {Object} commentSection - elemnt having id commentSection 
 */
function createComment(comment, commentSection) {
  let commentDiv = document.createElement('div');
  let commentPara = document.createElement('p');
  let replyBtn = document.createElement('span');
  let editBtn = document.createElement('span');
  let deleteBtn = document.createElement('span');



  commentDiv.className = 'commentDiv';
  commentPara.className = 'commentText';
  replyBtn.className = 'commentReplyBtn';
  editBtn.className = 'commentEditBtn';
  deleteBtn.className = 'commentUpdateBtn';


  replyBtn.dataset.key = comment.id;
  editBtn.dataset.key = comment.id;
  deleteBtn.dataset.key = comment.id;

  commentDiv.dataset.parentKey = comment.id;

  replyBtn.innerText = 'Add replay';
  // editBtn.innerText = 'Edit Reply';
  // deleteBtn.innerText = 'Delete replay';


  commentPara.innerText = comment.comment;

  commentDiv.appendChild(commentPara);
  commentDiv.appendChild(replyBtn);
  commentDiv.appendChild(editBtn);
  commentDiv.appendChild(deleteBtn);

  let parentElement = null
  if (comment.parentId && comment.parentId == Number(comment.parentId)) {
    const keyVal = `[data-parent-key="${comment.parentId}"]`

    parentElement = document.querySelector(keyVal);

  }

  if (parentElement) {
    if (comment.parentId)
      parentElement.appendChild(commentDiv);
  }
  else {
    commentSection.appendChild(commentDiv);
  }

  parent.appendChild(commentSection);
  commentInput.value = ''

}

function createCommentObj(keyAtt) {
  let obj = null;
  if (keyAtt === 'cmnt-btn') {
    obj = {
      parentId: null,
      id: Date.now(),
      comment: "",
      children: []
    }
  }
  else if (keyAtt == Number(keyAtt)) {
    obj = {
      parentId: Number(keyAtt),
      id: Date.now(),
      comment: "",
      children: []
    }
  }

  return obj;
}

function replyClicked(e) {
  let keyAtt = e.target.dataset.key;

  if (keyAtt) {
    const input = document.createElement('input');
    const button = document.createElement('button');

    button.id = 'reply-submit';
    button.innerText = 'Submit';
    input.id = 'reply-input';

    const keyVal = `[data-parent-key="${keyAtt}"]`
    const removeKeyVal = `[data-key="${keyAtt}"]`

    document.querySelector(removeKeyVal).remove();

    const replyDiv = document.querySelector(keyVal);

    replyDiv.appendChild(input);
    replyDiv.appendChild(button);

    input.addEventListener('input', (e) => {
      commentValue = e.target.value;
    });

    button.addEventListener('click', (e) => {
      submitComment(e , keyAtt);
    })
  }

}
//FUNCTION