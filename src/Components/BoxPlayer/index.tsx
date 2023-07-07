import React from 'react';
import { ButtonPlay, MainBox, MainCardName } from './style';


const BoxPlayer: React.FC = () => {
  return (
    <MainBox>
        <MainCardName>
          <p>Thiago Lopes</p>
        </MainCardName>
        <ButtonPlay>
          Play
        </ButtonPlay>
    </MainBox>
  )
}

export default BoxPlayer