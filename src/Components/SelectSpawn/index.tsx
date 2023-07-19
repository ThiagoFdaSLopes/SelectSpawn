import React, { useState } from 'react';
import { MainSelectSpawn, MainBox, Section, H1Title, ButtonLastLocation, ButtonSpawnar } from './style';
import playerOptionsSpawn from '../../Mocks/playerOptinsSpawn.json';
import { fetchNui } from '../../utils/fetchNui';

const SelectSpawn: React.FC = () => {
  const [selectSpawn, setselectSpawn] = useState(false)
  const [selectPosition, setselectPosition] = useState("")

  const handleSelectSpawn = (position: any) => {
    setselectSpawn(!selectSpawn)
    setselectPosition(position)
  }

  const handleSpawnar = () => {
    // fetchNui()
  }
  return (
    <MainSelectSpawn>
      <H1Title>SELECT YOUR SPAWN</H1Title>
        <Section>
          {
            playerOptionsSpawn.map((option, index) => 
            <MainBox key={index}>
              <h1>{option.title}</h1>
              <div className='image'>
                <img src={option.image} alt="location spawn" />
              </div>
              <div className='text'>{option.text}</div>
              <button className='button' onClick={() => handleSelectSpawn(option.position)}>Select Spawn</button>
            </MainBox>
            )
          }
        </Section>
      {
        selectSpawn ? (
          <ButtonSpawnar onClick={handleSpawnar}>Spawnar</ButtonSpawnar>
        ) :
        (
          <ButtonLastLocation>Last Location</ButtonLastLocation>
        )
      }
    </MainSelectSpawn>
  )
}

export default SelectSpawn;