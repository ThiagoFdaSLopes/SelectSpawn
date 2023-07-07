import React from 'react';
import { debugData } from '../utils/debugData';

// Imports Components
import BoxPlayer from './BoxPlayer';

//Imports StyleComponents
import { MainBG } from './style';

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
      <BoxPlayer />
      <BoxPlayer />
      <BoxPlayer />
    </MainBG>
    </>
  )
}

export default App