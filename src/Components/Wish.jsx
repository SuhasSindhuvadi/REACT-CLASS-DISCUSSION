import React from 'react'
function Wish(props) {
  const {name,course,children}=props
  return (
    <div>
      <h1>Hello {name} Welcome to {course} </h1>
      {children}
    </div>
  )
}

export default Wish;