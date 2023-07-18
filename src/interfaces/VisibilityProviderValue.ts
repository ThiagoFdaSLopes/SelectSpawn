import Player from "./Player"

export default interface VisibilityProviderValue {
    setVisible: (visible: boolean) => void
    setVisibleSpawnSelect: (visibleSpawnSelect: boolean) => void
    visible: boolean
    visibleSpawnSelect: boolean
    playersInfo: Player[]
}