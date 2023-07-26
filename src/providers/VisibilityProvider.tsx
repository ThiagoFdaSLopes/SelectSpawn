import React, {Context, createContext, useContext, useEffect, useState} from "react";
import {useNuiEvent} from "../hooks/useNuiEvent";
import {fetchNui} from "../utils/fetchNui";
import { isEnvBrowser } from "../utils/misc";
import VisibilityProviderValue from "../interfaces/VisibilityProviderValue";
import Player from "../interfaces/Player";

export const VisibilityCtx = createContext<VisibilityProviderValue | null>(null)

// This should be mounted at the top level of your application, it is currently set to
// apply a CSS visibility value. If this is non-performant, this should be customized.
export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [visible, setVisible] = useState(false)
  const [visibleSpawnSelect, setVisibleSpawnSelect] = useState(false)
  const [visibleCreator, setVisibleCreator] = useState(false)
  const [visiblePlayerList, setVisiblePlayerList] = useState(false)
  const [playersInfo, setplayersInfo] = useState<Player[]>([])
  const [playerChose, setplayerChose] = useState<Player | undefined>()
  const [first, setfirst] = useState("")
  const [last, setlast] = useState("")
  
  useNuiEvent<boolean>('setVisible', setVisible);
  useNuiEvent<boolean>('SpawnLocation', setVisibleSpawnSelect);
  useNuiEvent<boolean>('PlayerList', setVisiblePlayerList);
  useNuiEvent<boolean>('VisibleCreator', setVisibleCreator);
  useNuiEvent('Spawn', (data: Player[]) => setplayersInfo(data));

  // Handle pressing escape/backspace
  useEffect(() => {
    // Only attach listener when we are visible
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (["Escape"].includes(e.code)) {
        if (!isEnvBrowser()) fetchNui("hideFrame");
        else setVisible(!visible);
      }
    }

    window.addEventListener("keydown", keyHandler)

    return () => window.removeEventListener("keydown", keyHandler)
  }, [visible])

  return (
    <VisibilityCtx.Provider
      value={{
        visible,
        visibleSpawnSelect,
        playersInfo,
        playerChose,
        visibleCreator,
        visiblePlayerList,
        first,
        last,
        setVisibleSpawnSelect,
        setVisible,
        setplayerChose,
        setfirst,
        setlast
      }}
    >
    <div style={{ visibility: visible ? 'visible' : 'hidden', height: '100%'}}>
      {children}
    </div>
  </VisibilityCtx.Provider>)
}

export const useVisibility = () => useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)
