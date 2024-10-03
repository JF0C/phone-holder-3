export interface IUiState {
    currentOpenPopup: string | null
    loadedMeshes: string[]
    showNavbar: boolean
}

export const InitialUiState: IUiState = {
    currentOpenPopup: null,
    loadedMeshes: [],
    showNavbar: false
}