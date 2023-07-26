import Player from "./Player"

export default interface VisibilityProviderValue {
    setVisible: (visible: boolean) => void
    visiblePlayerList: boolean
    visibleCreator: boolean
    first: string,
    last: string
    setfirst: (first: string) => void
    setlast: (last: string) => void
    setVisibleSpawnSelect: (visibleSpawnSelect: boolean) => void
    visible: boolean
    visibleSpawnSelect: boolean
    playersInfo: Player[]
    setplayerChose: (player: Player) => void
    playerChose: Player | undefined
}