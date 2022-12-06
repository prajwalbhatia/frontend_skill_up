import React from 'react'

function HeroName({name}) {
  if(name === 'Joker') {
    throw new Error('Not a hero')
  }
  return (
    <div>{name}</div>
  )
}

export default HeroName