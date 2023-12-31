import React from 'react';
import { debugData } from '../utils/debugData';

// Imports Components
import BoxPlayer from './BoxPlayer';

//Imports StyleComponents
import { MainBG } from './style';

// MockPlayerData Test
import BoxNewPlayer from './BoxNewPlayer';
import { useVisibility } from '../providers/VisibilityProvider';
import Player from '../interfaces/Player';
import SelectSpawn from './SelectSpawn';
import Creator from './Creator';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  },
  {
    action: 'SpawnLocation',
    data: true,
  }
])

// Mock Data Player
// import playersInfo from '../Mocks/playersInfo.json';

const App: React.FC = () => {

  const { visibleSpawnSelect, playersInfo, visibleCreator, visiblePlayerList } = useVisibility();
    return (
      <>
        {
          visiblePlayerList && 
          <MainBG>
            {
              playersInfo?.length > 0 && playersInfo?.map((player: Player, index) =>
              <BoxPlayer 
                key={index} 
                name={player.Nome} 
                sex={player.Sexo} 
                blood={player.Blood} 
                indexSex={player.Sexo === "F" ? 0 : 1}
                dataPlayer={player}
              />)
            }
            {
              playersInfo.length < 1 && <BoxNewPlayer />
            }
          </MainBG>
        }
        {
          visibleSpawnSelect && <SelectSpawn />
        }
        {
          visibleCreator && <Creator />
        }
      </>
    )
}

export default App