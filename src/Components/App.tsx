import React from 'react';
import { debugData } from '../utils/debugData';

// Imports Components
import BoxPlayer from './BoxPlayer';

//Imports StyleComponents
import { MainBG } from './style';

// MockPlayerData Test
import players from '../Mocks/players.json';
import BoxNewPlayer from './BoxNewPlayer';
import Player from '../interfaces/Player';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

const App: React.FC = () => {
    return (
      <>
      <MainBG>
          {
            players?.length > 0 && players?.map((player: Player, index) => <BoxPlayer key={index + 1} name={player.fullname} sex={player.sex} indexSex={player.sex === "female" ? 0 : 1}/>)
          }
          {
            players.length < 3 && <BoxNewPlayer />
          }
      </MainBG>
      </>
    )
}

export default App