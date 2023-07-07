import React from 'react';
import { ButtonPlay, MainBox, MainCardName } from './style';
import { listPlayers } from '../../Mocks/listImgs';

type PropsPlayer = {
  name: string,
  indexSex: number,
  sex: string,
}


const BoxPlayer: React.FC<PropsPlayer> = ({ name, sex, indexSex }) => {
  const randomIndex = Math.floor(Math.random() * listPlayers[indexSex].length)
  return (
    <>   
    <MainBox img={listPlayers[indexSex][randomIndex]}>
      <MainCardName>
          <p>{name}</p>
      </MainCardName>
      <ButtonPlay>
          Escolher
      </ButtonPlay>
    </MainBox>
    </>
  )
}

export default BoxPlayer