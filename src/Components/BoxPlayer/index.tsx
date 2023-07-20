import React from 'react';
import { ButtonPlay, MainBox, MainCardName } from './style';
import { listPlayers } from '../../Mocks/listImgs';
import { fetchNui } from '../../utils/fetchNui';
import Player from '../../interfaces/Player';
import { useVisibility } from '../../providers/VisibilityProvider';

type PropsPlayer = {
  name: string,
  indexSex: number,
  sex: string,
  blood: string
  dataPlayer: Player
}


const BoxPlayer: React.FC<PropsPlayer> = ({ name, sex, indexSex, blood, dataPlayer }) => {
  const randomIndex = Math.floor(Math.random() * listPlayers[indexSex].length)

  const { setplayerChose } = useVisibility();

  const choosenCharacter = () => {
    fetchNui("CharacterChosen", dataPlayer)
    setplayerChose(dataPlayer)
  }

  return (
    <>   
      <MainBox img={listPlayers[indexSex][randomIndex]}>
        <MainCardName>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none">
                <path d="M94 47C94 72.9574 72.9574 94 47 94C21.0426 94 0 72.9574 0 47C0 21.0426 21.0426 0 47 0C72.9574 0 94 21.0426 94 47ZM9.4 47C9.4 67.7659 26.2341 84.6 47 84.6C67.7659 84.6 84.6 67.7659 84.6 47C84.6 26.2341 67.7659 9.4 47 9.4C26.2341 9.4 9.4 26.2341 9.4 47Z" fill="white" fill-opacity="0.2"/>
              </svg>
              <span>{blood}</span>
            </div>
            <p>{name}</p>
        </MainCardName>
        <ButtonPlay onClick={choosenCharacter}>
            Escolher
        </ButtonPlay>
      </MainBox>
    </>
  )
}

export default BoxPlayer