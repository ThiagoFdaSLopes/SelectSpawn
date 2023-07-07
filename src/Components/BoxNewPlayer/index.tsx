import React from 'react';
import { ButtonPlay, MainBox, MainCardName } from './style';

const BoxNewPlayer: React.FC = () => {
  return (
    <MainBox>
        <MainCardName>
          <p>Create New Player</p>
        </MainCardName>
        <ButtonPlay>
          Create
        </ButtonPlay>
    </MainBox>
  )
}

export default BoxNewPlayer