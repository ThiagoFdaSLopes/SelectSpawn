import React, { useState } from 'react';
import { MainSelectSpawn, MainBox, Section, H1Title, ButtonLastLocation, ButtonSpawnar, SectionButtons } from './style';
import playerOptionsSpawn from '../../Mocks/playerOptinsSpawn.json';
import { fetchNui } from '../../utils/fetchNui';
import { useVisibility } from '../../providers/VisibilityProvider';

const SelectSpawn: React.FC = () => {
  const { playerChose } = useVisibility()
  const [activeButton, setActiveButton] = useState(-10)
  const [selectSpawn, setselectSpawn] = useState(false)
  const [selectPosition, setselectPosition] = useState("")

  const handleSelectSpawn = (position: any, index: number) => {
    setActiveButton(index - 1)
    setselectSpawn(true)
    setselectPosition(position)
    const data = { index: index, selectPosition, playerChose }
    fetchNui("Chosen", data)
  }

  const handleSpawnar = () => {
    fetchNui("Spawn")
  }

  return (
    <MainSelectSpawn>
      <H1Title>SELECT YOUR SPAWN</H1Title>
        <Section>
          {
            playerOptionsSpawn.map((option, index) => 
            <MainBox key={index} active={activeButton === index}>
              <h1>{option.title}</h1>
              <div className='image'>
                <img src={option.image} alt="location spawn" />
              </div>
              <div className='text'>{option.text}</div>
              <button className='button' onClick={() => handleSelectSpawn(option.position, index + 1, )}>Select Spawn</button>
            </MainBox>
            )
          }
        </Section>
        <SectionButtons>
          {
            selectSpawn &&<ButtonSpawnar onClick={handleSpawnar}>Spawnar</ButtonSpawnar>
          }
        </SectionButtons>
    </MainSelectSpawn>
  )
}

export default SelectSpawn;