import React from 'react'

const InputForward = React.forwardRef((props , refs) => {
  return (
    <div>
      <input type="text" ref={refs} />
    </div>
  )
})

export default InputForward