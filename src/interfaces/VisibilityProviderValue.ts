import Player from "./Player"

export default interface VisibilityProviderValue {
    setVisible: (visible: boolean) => void
    visible: boolean
    playersInfo: Player[]
}