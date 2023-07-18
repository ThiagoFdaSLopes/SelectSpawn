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

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

const App: React.FC = () => {

  const { playersInfo, visibleSpawnSelect } = useVisibility();
    return (
      <>
        {
           !visibleSpawnSelect ?  ( 
           <MainBG>
                {
                  playersInfo?.length > 0 && playersInfo?.map((player: Player, index) =>
                  <BoxPlayer 
                    key={index} 
                    name={player.Nome} 
                    sex={player.Sexo} 
                    blood={player.Blood} 
                    indexSex={player.Sexo === "F" ? 0 : 1}
                    dataPlayer ={player}
                  />)
                }
                {
                  playersInfo.length < 3 && <BoxNewPlayer />
                }
            </MainBG>) : 
            <SelectSpawn />
        }
      </>
    )
}

export default App