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
  const commentObj = createCommentObj(keyAtt);
  commentObj.comment = commentValue
  comments.push(commentObj);

  const sec = document.querySelector('#commentSection');
  if (sec)
    sec.remove();

  const commentSection = document.createElement('div');
  commentSection.id = 'commentSection';

  commentSection.addEventListener('click', (e) => replyClicked(e))

  const convertedComments = convertComments(null, null);
  console.log('🚀 ~ file: index.js ~ line 37 ~ convertedComments', convertedComments);
  loopingOverComments(convertedComments, commentSection);

}

function loopingOverComments(convertedComments, commentSection)
{
  convertedComments.forEach((comment) => {
    createComment(comment, commentSection);

    if(comment.children.length > 0)
    {
      loopingOverComments(comment.children , commentSection)
    }
  })
}

function convertComments(parent, parentId) {
  const filterWithParentId = comments.filter((comment) => comment.parentId === parentId);

  if (parent && filterWithParentId.length > 0) {
    parent.children = [...filterWithParentId];
  }

  if (filterWithParentId.length > 0) {
    filterWithParentId.filter((comment) => {
      convertComments(comment, comment.id)
    })
  }

  return filterWithParentId;
}

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
  // debugger
  if (comment.parentId && comment.parentId == Number(comment.parentId)) {
    const keyVal = `[data-parent-key="${comment.parentId}"]`

    parentElement = document.querySelector(keyVal);

  }

  if (parentElement) {
    if (comment.parentId)
      // commentDiv.classList.add('p-l-15');
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
  // const commentObj = createCommentObj(keyAtt);
  // commentObj.comment = commentValue
  // createComment(commentObj);

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
      console.log('🚀 ~ file: index.js ~ line 147 ~ input.addEventListener ~ commentValue', commentValue);
    });

    button.addEventListener('click', (e) => {
      submitComment(e , keyAtt);
    })
  }

}
//FUNCTION