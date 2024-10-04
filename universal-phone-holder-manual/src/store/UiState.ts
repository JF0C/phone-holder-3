export interface IUiState {
    currentOpenPopup: string | null
    loadedMeshes: string[]
    showNavbar: boolean
    radioGroups: { groupId: string, activeItem?: string }[]
    navTitle: string
}

export const InitialUiState: IUiState = {
    currentOpenPopup: null,
    loadedMeshes: [],
    showNavbar: false,
    radioGroups: [],
    navTitle: ''
}