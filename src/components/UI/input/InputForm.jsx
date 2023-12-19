import React from 'react'
import "./InputForm.css"
const InputForm = React.forwardRef((props,ref)=> {
  return (
    <input ref={ref} type="text"  className='inputForm' {...props}/>
  )
})

export default InputForm;
