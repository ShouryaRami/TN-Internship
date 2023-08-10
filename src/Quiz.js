import React from 'react'

function Quiz(props) {
    const {name,language}=props
    console.log(name,language   )
  return (
      <div>Hello {name}
      <br/>
      Language known : {language}
      </div>
  )
}

export default Quiz