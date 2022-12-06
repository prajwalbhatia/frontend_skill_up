import React from 'react'

function memoFile({name}) {
  console.log('MEMO COMPONENT')

  return (
    <div>{name}</div>
  )
}

export default React.memo(memoFile)