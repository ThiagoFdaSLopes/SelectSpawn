import React from 'react';
import { ButtonPlay, MainBox, MainCardInfoNewPlayer, SpaceFree, SpaceFreeContent } from './style';
import { fetchNui } from '../../utils/fetchNui';

const BoxNewPlayer: React.FC = () => {

  const handleBoxCreator = () => {
    fetchNui("OpenCreator")
  }

  return (
    <MainBox>
      <MainCardInfoNewPlayer>
        <SpaceFree><p>Espaço Livre</p></SpaceFree>
        <SpaceFreeContent><p>Você pode criar personagem gratuitamente. Após a ativação, você será redirecionado para o editor de personagens, após o qual começará a vida do zero.</p></SpaceFreeContent>
      </MainCardInfoNewPlayer>
        <ButtonPlay onClick={handleBoxCreator}>
          CRIAR PERSONAGEM
        </ButtonPlay>
    </MainBox>
  )
}

export default BoxNewPlayer