import React, { useState } from 'react'
import { InputMain, MaiNForms } from './style'
import { useVisibility } from '../../providers/VisibilityProvider';

const Forms: React.FC = () => {

  const { setfirst, setlast, first, last } = useVisibility();

  interface InputEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleInput = (event: InputEvent ) => {
    event.target.name === "first" ? setfirst(event.target.value) : setlast(event.target.value)
  }
  return (
    <MaiNForms>
      <InputMain placeholder='First Name' name="first" onChange={handleInput} value={first}/>
      <InputMain placeholder='Last Name' name="last" onChange={handleInput} value={last}/>
    </MaiNForms>
  )
}

export default Forms