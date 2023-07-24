import React from 'react'
import { MainCreator, MenuLeft, MenuRigth } from './style'
import Forms from '../Forms'

const Creator: React.FC = () => {
  return (
    <MainCreator>
      <MenuRigth>
        <h1>CHARACTER CREATION</h1>
        <Forms />
      </MenuRigth>
      <MenuLeft />
    </MainCreator>
  )
}

export default Creator