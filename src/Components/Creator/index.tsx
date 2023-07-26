import React, { useState } from 'react'
import { ButtonCreatePerson, ButtonGenderOption, ButtonReturn, GenderSelect, MainCreator, MenuLeft, MenuRigth } from './style'
import Forms from '../Forms'
import masculine from '../../Images/silhuetamasculine.png';
import feminine from '../../Images/silhuetafeminine.png';
import { useVisibility } from '../../providers/VisibilityProvider';
import { fetchNui } from '../../utils/fetchNui';

const Creator: React.FC = () => {
  const [gender, setGender] = useState("")
  const [activeButton, setActiveButton] = useState('buttonf');
  const { first, last } = useVisibility()

  const handleGender = async (option: string, buttonName: string) => {
    setActiveButton(buttonName);
    setGender(option)
    await fetchNui("CustomizationChar", { Skin: gender, Tattos: [], Barber: [], Clothes: []})
  }

  const handleReturn = () => {
    fetchNui("ReturnPlayerList")
  }

  const handleCreatePerson = () => {
    fetchNui("NewCharacter", { name: first, lastname: last, sex: gender})
  }
  return (
    <MainCreator>
      <MenuRigth>
        <h1>CHARACTER CREATION</h1>
        <Forms />
        <GenderSelect>
          <ButtonGenderOption color='249, 52, 121, 0.80' active={activeButton === 'buttonf'} onClick={() => handleGender("mp_f_freemode_01", "buttonf")} >
            <img src={feminine} alt="silhueta feminine" />
          </ButtonGenderOption>
          <ButtonGenderOption color='78, 52, 249, 0.80' active={activeButton === 'buttonm'} onClick={() => handleGender("mp_m_freemode_01", "buttonm")}>
            <img src={masculine} alt="silhueta masculine" />
          </ButtonGenderOption>
        </GenderSelect>
        <ButtonCreatePerson onClick={handleCreatePerson}>
          CREATE
        </ButtonCreatePerson>
        <ButtonReturn onClick={handleReturn}>
          RETURN
        </ButtonReturn>
      </MenuRigth>
      <MenuLeft />
    </MainCreator>
  )
}

export default Creator